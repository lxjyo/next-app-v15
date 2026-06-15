"use client";
import { useEffect, startTransition } from "react";
import { useRouter } from "next/navigation";

// 局部错误边界组件
export default function Error({
  error,
  reset, // reset函数可以用来重置错误边界的状态，通常会重新尝试渲染子组件
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    console.log("error:", error.digest, error.message);
  }, [error]);

  const onReset = () => {
    router.refresh();
    startTransition(() => { // 可以让并发任务优先级更低，不会阻塞用户的交互
      reset(); 
    });
  }

  return (
    <div className="flex h-full w-full items-center justify-center fixed top-0 bottom-0 left-0 right-0 bg-[rgba(255,0,0,0.5)] z-50">
      <h1 className="text-4xl font-bold text-gray-800">Home Error</h1>
      <button onClick={onReset} className="mt-4 px-4 py-2 bg-gray-800 text-white rounded">Retry</button>
    </div>
  );
}
