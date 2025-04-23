export interface Context {
    token: string | undefined
}

export const createContext = async () => ({} as Context);