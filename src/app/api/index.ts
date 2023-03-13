import { clearStorage } from "@app/utils";

export const fetchApi = async <T>(url: string, token?: string, method: ApiMethod = "GET", data?: unknown, formData?: FormData, signal?: AbortSignal) => {
  const headers = {
    Authorization: token ? `Bearer ${token}` : "",
    ...(!formData && { "Content-Type": "application/json" }),
  };

  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/${url}`, {
    method,
    headers,
    credentials: "include",
    body: formData ?? JSON.stringify(data),
    signal,
  }).catch(() => {
    return null;
  });
  if (response) {
    const res = await response.json();
    if (res.error) {
      clearStorage();
      throw res.error as Error;
    } else {
      return res as T;
    }
  }
};
