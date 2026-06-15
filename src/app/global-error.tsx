'use client';

// 1. 必须包含 html 和 body 标签
// 2. 底层是用 error boundary 实现的，必须是client组件
// 3. 生产环境下才会展示这个页面，开发环境下会展示错误信息
export default function GlobalError() {
  return <html>
    <body>
      <div className="flex h-screen w-screen items-center justify-center bg-red-200">
        <h1 className="text-4xl font-bold text-gray-800">Global Error</h1>
      </div>
    </body>
  </html>
}