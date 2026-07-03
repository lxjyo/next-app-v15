import prisma from '../lib/prisma';


/**
 * 开发环境 每次刷新页面都会生成一个新的随机数
 * 生产环境 始终是同一个随机数，因为生产环境会被缓存，
 * 除非你重新部署应用，否则这个随机数不会改变
 * 
 */

import { revalidatePath } from 'next/cache'
export default async function Page() {
 const result = await prisma.user.findMany();
 async function createAction(formData: FormData) {
  'use server'
  const username = formData.get('username');
  const password = formData.get('password');
  await prisma.user.create({
    data: {
      username: username as string,
      password: password as string,
    },
  });
  revalidatePath('/');
 }
  return <div className="text-amber-600">
    <form action={createAction}>
      <input type="text" name="username" placeholder="username" className="border p-2" />
      <input type="text" name="password" placeholder="password" className="border p-2" />
      <button type="submit" className="bg-blue-500 text-white p-2">create</button>
    </form>
    { result.map((item: any) => (
      <div key={item.id}>
        <p>id: {item.id}</p>
        <p>username: {item.username}</p>
        <p>password: {item.password}</p>
      </div>
    )) }
  </div>
}