import type { Metadata } from "next";

// 静态元数据
// export const metadata: Metadata = {
//   title: "Article",
//   description: "Article Title",
// };

type IArticle = {
  userId: string,
  id: number;
  title: string;
  body: string;
};

function getArticle(id: string) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json())
}

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }): Promise<Metadata> {
  const params = await searchParams;
  const res: IArticle = await getArticle(params.id as string)
  return {
    title: `Article ${res.title}`,
    description: res.body
  }
}

export default async function Page({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const params = await searchParams;
  const res: IArticle = await getArticle(params.id as string)
  return <div>
    <h1 className="text-4xl font-bold">{res.body}</h1>
  </div>
}