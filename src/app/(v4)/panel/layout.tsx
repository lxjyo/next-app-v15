import Link from "next/link";

// card 和 menu 是并行路由，分别放在 @card 和 @menu 文件夹下
export default function Layout({
  children,
  card,
  menu,
}: {
  children: React.ReactNode;
  card: React.ReactNode;
  menu: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen p-4 bg-green-100">
      <h1 className="text-2xl font-bold">Panel Layout</h1>
      <Link href="/panel/info" className="text-blue-500 underline mr-4">Go to Info</Link>
      <div className="flex items-center h-[80px] justify-between">
        <div className=" bg-cyan-400 relative h-full w-[48%] rounded">{card}</div>
        <div className=" bg-yellow-400 relative h-full w-[48%] rounded">{menu}</div>
      </div>
      <div className="mt-4 h-[240px] border-green-400 border relative">
        {children}
      </div>
    </div>
  );
}
