// export default async function Page() {
//   await new Promise((resolve) => setTimeout(resolve, 2000));

//   return <h1 className="text-4xl font-bold text-gray-800">Hello, Next.js 15!</h1>
// }


export default async function Page() {
  // cache: "no-store" 强制每次请求都从服务器获取最新数据，不缓存
  const res = await fetch("http://localhost:5000/posts", { cache: "no-store" });
  const posts = await res.json();
  return <h1 className="text-4xl font-bold text-gray-800">Hello, Next.js 15!
    <p>{JSON.stringify(posts)}</p>
  </h1>
}