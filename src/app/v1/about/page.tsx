import { notFound } from "next/navigation";

export default async function Blog() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  notFound(); // 需要显示404 页面时，调用 notFound() 函数
  return <h1 className="text-4xl font-bold text-gray-800">Welcome to the Blog!</h1>
}