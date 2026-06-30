import Form from "next/form";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import PostForm from "@/components/PostForm";

export default async function NewPostPage() {
  const users = await prisma.user.findMany();

  //  useActionState 会把表单的“上一次状态 (prevState)”作为第一个参数注入进去。
  async function createPost(prevState: any, formData: FormData) {
    'use server'
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const authorId = formData.get('authorId') as string;

    await prisma.post.create({
      data: {
        title,
        content,
        authorId: parseInt(authorId),
      },
    });
    revalidatePath('/posts');
    redirect("/posts");
  }


  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Create New Post</h1>
      <PostForm users={users} createPostAction={createPost} />
    </div>
  );
}
