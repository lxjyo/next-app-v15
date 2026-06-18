"use client" // useRouter is a client component

import Link from "next/link";
// import { useRouter, useSearchParams, usePathname } from "next/navigation";

// export default function ShopPage() {
//   const searchParams = useSearchParams();
//   const pathname = usePathname();
//   const router = useRouter();
//   const handleClick = () => {
//     router.push("/list");
//   }
//   const handleUpdateParams = () => {
//     console.log(searchParams) // 是个Map
//     const type = searchParams.get("name") === "1" ? "2" : "1";
//     const params = new URLSearchParams(searchParams.toString());
//     params.set('type', type);
//     // window.history.replaceState(null, '', `${pathname}?${params.toString()}`);
//     router.replace(`${pathname}?${params.toString()}`)
//   }
//   return <div className="flex flex-col items-center justify-center w-full h-screen">
//     <h1 className="text-2xl font-bold">Shop Page</h1>
//     <Link href="/">Go to Home</Link>
//     <button onClick={handleClick}>Go to List</button>
//     <button onClick={handleUpdateParams}>更新URL参数</button>
//   </div>
// }

export default function ShopPage() {
  return <div className="flex flex-col items-center justify-center w-full h-screen">
    <h1 className="text-2xl font-bold">Shop Page</h1>
    {/* 在生产环境下会预取数据 */}
    <Link href="/list" prefetch>Go to List</Link>
  </div>
}