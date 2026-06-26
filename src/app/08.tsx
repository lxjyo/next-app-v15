
import { revalidatePath, revalidateTag } from 'next/cache'
async function getData() {
  const res = await fetch('http://localhost:4200/api/posts', {
    next: {
      // revalidate: 100, // seconds
      tags: ['posts']
    }
  })
  return res.json()
}

export default async function Page() {
  const data = await getData()
  async function createAction() {
    'use server'
    // revalidatePath('/');
    revalidateTag('posts')
  }
  return <main>{JSON.stringify(data)}
    <form action={createAction}>
      <button type="submit">submit</button>
    </form>
  </main>
}
