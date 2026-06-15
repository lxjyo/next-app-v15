import Link from "next/link";
import Counter from "@/components/Counter";

// 会保留状态，除非手动刷新页面，否则组件实例不会被销毁
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen flex-col gap-4 bg-cyan-100">
      这是Layout组件
      <nav className="flex gap-4">
        <Link
          href="/v1/home"
          className="text-lg font-medium text-gray-700 hover:text-gray-900"
        >
          Home
        </Link>
        <Link
          href="/v1/about"
          className="text-lg font-medium text-gray-700 hover:text-gray-900"
        >
          About
        </Link>
      </nav>
      <Counter />
      {children}
    </div>
  );
}
