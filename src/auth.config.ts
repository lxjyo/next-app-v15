import type { NextAuthConfig } from "next-auth";

const authConfig: NextAuthConfig = {
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      if (pathname.startsWith("/note/edit")) {
        return !!auth;
      }
      return true;
    },
  },
};

export default authConfig;
