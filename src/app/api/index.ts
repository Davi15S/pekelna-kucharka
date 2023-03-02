export const fetchApi = async <T>(url: string, token?: string, method: ApiMethod = "GET", body?: unknown) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: token ? token : "",
  };

  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/${url}`, {
    method,
    headers,
    body: method == "GET" ? null : JSON.stringify({ data: body }),
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
