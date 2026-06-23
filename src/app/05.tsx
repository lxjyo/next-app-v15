/**
 * Server Actions 服务器操作：在服务器上执行的async异步函数。可以在Server和Client Components中调用它们，以处理
 * Next.js 应用程序中的表单提交和数据更改
 * 好处：
 *  1.减少fetch和路由处理程序的调用
 *  2.与表单结合灵活
 */
// 内联的server actions只能在服务器组件中，不能再客户端组件中使用
// 客户端和服务端组件都支持外部文件的server actions

// export default async function Page() {
//   // server actions
//   async function createAction() {
//     'use server'
//     return 'create action'
//   }
//   const res = await createAction();
//   return <div>Home Page {res}</div>
// }

"use client";
import { useEffect, useState } from "react";
import { createAction } from "./actions";
import Card from "@/components/Card";

export default function Page() {
  const [res, setState] = useState<string>("");
  useEffect(() => {
    createAction().then((data) => setState(data));
  });
  return (
    <div>
      Home Page
      {/* createAction 可以传递给客户端组件 */}
      <Card createAction={createAction} data={res} />
    </div>
  );
}
