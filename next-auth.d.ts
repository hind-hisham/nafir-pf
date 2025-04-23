import { DefaultSession, DefaultJWT } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
    interface Session {
      user: {
        id: string;
        name: string;
        email: string;
        image: string;
        accessToken: string | undefined
      } & DefaultSession["user"];
    }
  
    interface JWT extends DefaultJWT {
      id: string;
      accessToken: string | undefined;
    }
  }
  