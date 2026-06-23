/**
 * Server Actions 服务器操作：在服务器上执行的async异步函数。可以在Server和Client Components中调用它们，以处理
 * Next.js 应用程序中的表单提交和数据更改
 * 好处：
 *  1.减少fetch和路由处理程序的调用
 *  2.与表单结合灵活
 */
// 内联的server actions只能在服务器组件中，不能再客户端组件中使用
// 客户端和服务端组件都支持外部文件的server actions
"use client";
import { createFormAction } from "./actions";
export default function Page() {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.currentTarget.form?.requestSubmit();
    }
  };
  return (
    <form action={createFormAction}>
      <div className="space-x-2 flex">
        <div>Title</div>
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="border-amber-400 border"
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="space-x-2 flex">
        <div>Name</div>
        <input
          type="text"
          name="name"
          placeholder="名称"
          className="border-amber-400 border"
          onKeyDown={handleKeyDown}
        />
      </div>
      <button type="submit">Create</button>
    </form>
  );
}
