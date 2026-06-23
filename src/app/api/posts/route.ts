import { NextResponse } from "next/server";

// GET /api/posts 大写方法名表示一个路由处理函数、

// export function GET() {
//   return NextResponse.json({
//     status: 200,
//     message: "Hello World",
//   })
// }

export async function GET(request: Request) {
  // 获取查询参数
  const searchParams = new URL(request.url).searchParams;
  const key = searchParams.get("key");
  console.log(key);
  const res = await fetch(`${process.env.NEXT_BASE_URL}/posts`);
  const data = await res.json();
  return NextResponse.json({
    status: 200,
    data,
    message: "Success",
  });
}

// POST请求
export async function POST(request: Request) {
  const data = await request.json(); // 解析请求体中的JSON数据
  console.log(data.date)
  return NextResponse.json({
    status: 200,
    data,
    message: "Success",
  });
}

export function DELETE() {
}
