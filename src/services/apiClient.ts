export type APIRequestOptions = RequestInit & { payload?: Record<string, unknown> };

const BASE_URL = import.meta.env.VITE_API_BASE_URL || '/';

export async function apiClient(path: string, options: APIRequestOptions = {}) {
  const { payload, ...rest } = options;
  const base = BASE_URL.endsWith('/') ? BASE_URL.slice(0, -1) : BASE_URL;
  const targetPath = path.startsWith('/') ? path : `/${path}`;
  const response = await fetch(`${base}${targetPath}`, {
    method: payload ? 'POST' : 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...rest.headers,
    },
    body: payload ? JSON.stringify(payload) : undefined,
    ...rest,
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || 'Network error');
  }

  return response.json();
}
