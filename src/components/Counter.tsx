'use client';  // 这是一个客户端组件  RCC
import { useState } from 'react';

export default function Counter({ children }: { children?: React.ReactNode }  ) {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-pink-200 p-2 rounded">
      这是Counter组件
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      { children }
    </div>
  );
}