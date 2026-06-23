/**
 * Server Actions 服务器操作：在服务器上执行的async异步函数。可以在Server和Client Components中调用它们，以处理
 * Next.js 应用程序中的表单提交和数据更改
 * 好处：
 *  1.减少fetch和路由处理程序的调用
 *  2.与表单结合灵活 
 */
// 内联的server actions只能在服务器组件中，不能再客户端组件中使用
// 客户端和服务端组件都支持外部文件的server actions
// 你还可以将服务器操作作为属性传递给客户端组件（没有use server的函数不能传递

"use server";
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
import { z } from "zod";

export async function createAction() {
  return "create action";
}

const schema = z.object({
  email: z.email({ message: "Invalid email address" }),
  name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
});
export async function createFormAction(formData: FormData) {
  const email = formData.get('email')
  const name = formData.get('name')
  console.log('name', name)
  console.log('email', email)
  await sleep(1000);
  const validFields = schema.safeParse({ email, name });
  if (!validFields.success) {
    throw new Error("Invalid email or name");
  }
}
