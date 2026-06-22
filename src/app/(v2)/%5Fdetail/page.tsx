
// _detail 路由成私有路由，访问不到 404，要想能访问，需要改成 %5Fdetail 路由地址 _detail
export default function Page() {
  return <h1 className="text-4xl font-bold text-gray-800">Hello, %5FDetail</h1>
}