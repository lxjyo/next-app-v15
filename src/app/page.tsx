import { connection } from 'next/server'

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

/**
 * 开发环境 每次刷新页面都会生成一个新的随机数
 * 生产环境 始终是同一个随机数，因为生产环境会被缓存，
 * 除非你重新部署应用，否则这个随机数不会改变
 * 
 */
export default async function Page() {
  await connection(); // 切换成动态渲染
  const content = getRandomNumber();
  // fetch 默认是缓存的（静态渲染），生产环境会被缓存，所以每次请求都会得到同一个结果
  const todo =  await fetch(`https://jsonplaceholder.typicode.com/todos/${content}`, {
    cache: 'no-store' // 关闭缓存，强制每次请求都获取最新数据
  }).then(res => res.json());
  return <div className="text-amber-600">这组件的随机数是 {content}
  <p>{ todo.title }</p>
  </div>
}