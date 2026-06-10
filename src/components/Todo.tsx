// rsc : 服务器组件

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

// 默认 RSC : 服务器组件
export default async function TodoPage() {
  const data: Todo = await fetch('https://jsonplaceholder.typicode.com/todos/6').then(res => res.json());
  return (
    <div>
      <h1>HELLO 06</h1>
      <p>{data.title}</p>
    </div>
  );
}