import { clearStorage } from "@app/utils";

export const fetchApi = async <T>(url: string, token?: string, method: ApiMethod = "GET", data?: unknown, formData?: FormData, signal?: AbortSignal) => {
  const headers = {
    Authorization: token ? `Bearer ${token}` : "",
    ...(!formData && { "Content-Type": "application/json" }),
  };

  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/${url}`, {
    method,
    headers,
    body: formData ?? JSON.stringify(data),
    credentials: "include",
    signal,
  }).catch(() => {
    throw undefined;
  });
  const res = await response.json();
  if (res.error) {
    if (res.error.status == 403) {
      clearStorage();
    }
    throw res.error as Error;
  } else {
    return res as T;
  }
};
