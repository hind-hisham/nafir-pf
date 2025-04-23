import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      // more explicit
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,

      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
      profile: (profile) => {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, profile, account }) {
      if (user) {
        token.id = user.id;
        // TODO: Fix TypeScript quirk here
        token.accessToken = account?.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.accessToken = token.accessToken as string | undefined;
      }
      return session;
    },
    async signIn({ account, profile }) {
      if (account?.provider === "google" && profile) {
        try {
          const res = await axios.post("http://localhost:8000/api/sauth", {
            name: profile.name,
            email: profile.email,
            profile_pic: profile.picture,
            googele_token: account.id_token,
          });
          console.log(res.data);
          const { token } = res.data;

          if (typeof window !== "undefined") {
            localStorage.setItem("authToken", token);
          }

          return true;
        } catch (error) {
          console.error("Error sending to Laravel /api/sauth", error);
          return false;
        }
      }

      return true;
    },
  },
});
