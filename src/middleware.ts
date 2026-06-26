/**
 *
 * 中间件允许在请求完成之前运行代码。然后根据传入的请求，可以重写、重定向、修改请求或响应头或直接响应来修改响应
 *
 */

import { NextResponse, NextRequest } from "next/server";
export function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname);
  const auth = true;
  if (!auth) {
    const pathname = request.nextUrl.pathname;
    if (pathname.startsWith("/api")) {
      return NextResponse.json(
        {
          message: "Unauthorized",
          status: 401,
        },
        {
          // 设置响应状态码, client 端会收到这个状态码
          status: 401,
        },
      );
    } else {
      return NextResponse.redirect(new URL("/login", request.nextUrl.origin))
    }
  }
  return NextResponse.next();
}

// 配置拦截规则
export const config = {
  matcher: ["/api/:path*", "/order/:path*"], // 拦截匹配规则
};
