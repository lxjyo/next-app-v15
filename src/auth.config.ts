import type { NextAuthConfig } from "next-auth";

// 只放不依赖 Node.js 模块的逻辑，供 Edge Middleware 使用
const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/auth",
  },
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      if (pathname.startsWith("/note/edit")) {
        return !!auth?.user;
      }
      return true;
    },
  },
  providers: [], // providers 在 auth.ts 里补充，这里留空
};

export default authConfig;
