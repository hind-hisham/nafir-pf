
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
 declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name: string
      email: string
      image: string
    }
  }
  interface JWT {
    id: string
  }
}
interface Proffile {
    email: string
    name: string
    image: string
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy:"jwt",

  },
  providers: [Google ({
    authorization : {
        params: {
            prompt: "consent",
            access_type: "offline",
            response_type: "code",
        },
    } 
  })],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
   
    async signIn({ account, profile }) {
        if (account?.provider === "google") {
            const { email, name, picture } = profile
            const user = {
            email,
            name,
            image: picture,
            }
            return user
        }
        return false 
    }

  }

})



 