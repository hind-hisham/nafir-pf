import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials"
import axios from "axios";

const BACKEND_URL = "http://localhost:8000";

interface UserCredentials {
  email: string | unknown;
  password: string | unknown
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "openid email profile",
        },
      },
    }),
    Credentials({
      credentials: {
        email: {label: 'email'},
        password: {label: 'password', type: 'password'}
      },
      async authorize(credentials: Partial<UserCredentials>, request) {
        console.log('Received', JSON.stringify(credentials))
        if (!credentials) {
          console.log('NO CREDENTIALS RECEIVED')
          return null
        }
        const {email} = credentials
        if (typeof email !== 'string') {
          return null;
        }
        console.log(credentials)
        return {
          email, name: 'Dummy', id: 'asdfasdf', image: ''
        }
      }
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account?.access_token) {
        try {
          const res = await fetch(`${BACKEND_URL}/api/atauth`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ access_token: account.access_token, provider: 'google' }),
          });

          const data = await res.json();

          console.log("JWT callback data:", data);
          if (!res.ok) {
            console.error("Backend error:", data);
            throw new Error(data.message || "Failed to authenticate user");
          }

          return {
            ...token,
            id: data.id,
            email: data.email,
            authToken: data.authToken,
          };
        } catch (err) {
          console.error("JWT callback error:", err);
          throw err; 
        }
      }

      return token;
    },

    async session({ session, token }) {
      session.user.authToken = token.authToken as string;
      session.user.id = token.id as string;
      session.user.email = token.email as string;

      console.log("Session callback data:", session); 

      return session;
    },
  },
});
