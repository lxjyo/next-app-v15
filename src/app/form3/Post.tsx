'use client';
import { use } from 'react';

const fetchData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await res.json();
  return data;
}
const postPromise = fetchData();
export default function Page() {
  const post = use(postPromise);
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}