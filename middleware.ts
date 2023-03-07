import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import Cookies from "js-cookie";

const secret = process.env.JWT_SECRET;

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (request.url.includes("/login") || request.url.includes("/register")) {
    if (token) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else {
    if (token) {
      const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));
      if (!payload) {
        Cookies.remove("token");
      }
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

export const config = {
  matcher: ["/recipes/new", "/login", "/register"],
};
