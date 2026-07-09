import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub,
    CredentialsProvider({
      name: "账号密码登录",
      credentials: {
        username: {
          label: "用户名",
          type: "text",
          placeholder: "请输入用户名",
        },
        password: {
          label: "密码",
          type: "password",
          placeholder: "请输入密码",
        },
      },
      async authorize(credentials, req) {
        const name = credentials?.username??'';
        const password = credentials?.password ?? '';
        if (!name || !password) {
          throw new Error("用户名或密码不能为空");
        }
        const user = await prisma.user.findFirst({
          where: {
            AND: [{ username: name }, { password: password }],
          },
        });
        if (user) {
          return {
            id: String(user.id),
            name: user.username ?? "",
          };
        }
        throw new Error("用户名或密码错误");
      },
    }),
  ],
  pages: {
    // 完全自定义授权页面
    // signIn: '/auth'
  },
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      if (pathname.startsWith("/note/edit")) {
        return !!auth;
      }
      return true;
    },
  },
});
