type ApiMethod = "GET" | "POST" | "PUT" | "DELETE";

interface Error {
  error: {
    status: number;
    name: string;
    message: string;
    details: string;
  };
}
