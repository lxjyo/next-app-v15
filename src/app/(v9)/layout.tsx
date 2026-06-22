import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: {
    default: 'blog', // 默认标题
    template: '%s | blog' // 标题模板 如果子页面设置了title，则会进行组合
  }
}


export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col items-center justify-center w-full h-screen">
    <h1 className="text-2xl font-bold">Blog</h1>
    <div>
      { children }
    </div>
  </div>
}