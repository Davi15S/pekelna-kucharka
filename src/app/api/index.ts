export const fetchApi = async <T>(url: string, token?: string, method: ApiMethod = "GET", data?: unknown, formData?: FormData) => {
  const headers = {
    Authorization: token ? token : "",
    ...(!formData && { "Content-Type": "application/json" }),
  };

  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/${url}`, {
    method,
    headers,
    body: formData ?? JSON.stringify(data),
  });
  try {
    const res = await response.json();
    if (res.error) {
      return res.error;
    } else {
      return res.data as T;
    }
  } catch {
    return;
  }
};
