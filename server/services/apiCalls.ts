import { Context } from "../context";

export function apiCall(url: string, ctx: Context, options?: RequestInit) {
    const { token } = ctx;
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    };
    
    return fetch(url, {
        ...options,
        headers: {
        ...headers,
        ...(options?.headers || {}),
        },
    });
}
