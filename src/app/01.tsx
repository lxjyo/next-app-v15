
// server request 推荐使用服务端请求，更安全、更高效
import { getUserRequestKey } from '@/utils/config';

export default async function Page() {
  const res = await fetch(`${process.env.NEXT_BASE_URL}/posts?key=${getUserRequestKey().key}`);
  const data = await res.json();
  return <div>{JSON.stringify(data)}</div>;
}

// client request  
// 'use client'
// import { getUserRequestKey } from '@/utils/config';
// import { useState, useEffect } from 'react';
// export default function Page() {
//   const [state, setState] = useState(null);
//   useEffect(() => {
//     fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts?key=${getUserRequestKey().key}`)
//       .then(res => res.json())
//       .then(data => setState(data));
//   }, []);

//   return <div>{JSON.stringify(state)}</div>;
// }
