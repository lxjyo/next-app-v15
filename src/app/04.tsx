// export default async function Page() {
//   const res = await fetch(`http://localhost:4200/api/posts`);
//   const data = await res.json();
//   return <div>{JSON.stringify(data)}</div>;
// }

'use client'
import { useState, useEffect } from 'react';
export default function Page() {
  const [state, setState] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:4200/api/posts`)
      .then(res => res.json())
      .then(data => setState(data));
  }, []);

  return <div>{JSON.stringify(state)}</div>;
}
