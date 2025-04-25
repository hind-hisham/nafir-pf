import { Context } from "../context";

export function contextFetch(url: string, ctx: Context, options?: RequestInit) {
    const token = ctx.token
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token?.authToken}`,
    };
    
    return fetch(url, {
        ...options,
        headers: {
        ...headers,
        ...(options?.headers || {}),
        },
    });
}
