import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";

const BACKEND_URL = "http://localhost:8000"

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      // more explicit
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, user, profile, account }) {
      console.log(token, user, profile, account);
      if (account?.access_token) {
        console.log(`Got access token: ${account.access_token}`);
        token.accessToken = account.access_token;
        const res = await fetch(`${BACKEND_URL}/api/atauth`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ access_token: account.access_token, provider: 'google' }),
        });
        console.log(res)
        const jsoned = await res.json()
        console.log(jsoned)
        if (!res.ok) {
          return null; // hmmm...
        }
        const data = (await res.json()) as {email: string, id: string, authToken: string};
        return data
      }
      return null;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.authToken = token.authToken as string;
      }
      return session; // returning session instead of null
    },
  },
});
