import { Context } from "../context";

const API_BASE = process.env.API_BASE!;
const makeUrl = (endpoint: string) => `${API_BASE}${endpoint}`;

export async function callBackend<T = { data: any }>(
  endpoint: string,
  ctx: Context,
  options?: RequestInit
): Promise<T> {
  const token = ctx.token;
  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const resp = await fetch(makeUrl(endpoint), {
    ...options,
    headers: {
      ...headers,
      ...(options?.headers || {}),
    },
  });
  console.log("Received response", resp);
  const data = (await resp.json()) as T;
  console.log("DATA:", data);
  return data;
}
