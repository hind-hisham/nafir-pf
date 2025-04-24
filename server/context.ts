import { JWT } from "next-auth";

export interface Context {
    token: JWT | undefined;
}

export const createContext = async () => ({} as Context);