
import { connection } from "next/server"
// 路由组 ()
export default async function Page() {
  connection(); // 变成动态渲染
  await new Promise((resolve) => setTimeout(resolve, 5000))
  return <h1 className="text-4xl font-bold text-gray-800">Hello, List</h1>
}