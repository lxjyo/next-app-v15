/**
 *
 * \[] 动态路由
 *
 */

// export default function Page({ params }: { params: { id: string } }) {
//   return (
//     <h1 className="text-4xl font-bold text-gray-800">
//       Hello, Detail {params.id}
//     </h1>
//   )
// }

// react 19的use函数操作  服务端和客户端都可以用
// import { use } from "react";
// export default function Page({
//   params,
//   searchParams,
// }: {
//   params: Promise<{ id: string }>;
//   searchParams: Promise<{ [key:string]: string | string[] | undefined }>;
// }) {
//   const { id } = use(params);
//   const search = use(searchParams);
//   return (
//     <h1 className="text-4xl font-bold text-gray-800">Hello, Detail {id}  查询参数：{ JSON.stringify(search)} </h1>
//   );
// }


// SSG 生成静态页面，预渲染，性能更好，适合内容不经常变化的页面
// 利用 generateStaticParams 生成静态参数，返回一个数组，每个元素都是一个对象，对象的属性就是路由参数

type ITodo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export async function generateStaticParams() {
//   return [
//     { id: '123' },
//     { id: '456' },
//   ]
// };
  const todos: ITodo[] = await fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json());
  return todos.map(todo => ({ id: String(todo.id) }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const todo: ITodo = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => res.json());
  return (
    <h1 className="text-4xl font-bold text-gray-800">{todo.title} {todo.completed ? 
      '(已完成)' : 
      '待处理' } </h1>
  );
}