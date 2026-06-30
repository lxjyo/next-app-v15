"use client"; // useActionState 只能用在客户端

import Form from "next/form";
import { User } from "../generated/prisma/client";
import { useActionState } from "react";

interface PostFormProps {
  users: User[];
  // 传入我们在服务端定义的 action
  createPostAction: (prevState: any, formData: FormData) => Promise<any>;
}

export default function PostForm({ users, createPostAction }: PostFormProps) {
  // 💡 state 用于接收服务端的返回值（如错误信息），isPending 即为 Loading 状态
  const [state, formAction, isPending] = useActionState(createPostAction, null);
  return (
    <Form action={formAction} className="space-y-6">
      {state?.error && (
        <div className="p-3 bg-red-100 text-red-600 rounded-lg">
          {state.error}
        </div>
      )}
      <div>
        <label htmlFor="title" className="block text-lg mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter your post title"
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      <div>
        <label htmlFor="content" className="block text-lg mb-2">
          Content
        </label>
        <textarea
          id="content"
          name="content"
          placeholder="Write your post content here..."
          rows={6}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      <div>
        <label htmlFor="authorId" className="block text-lg mb-2">
          Author
        </label>
        <select
          id="authorId"
          name="authorId"
          className="w-full px-4 py-2 border rounded-lg"
        >
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.username}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
      >
        {isPending ? (
          <>
            {/* 这里可以放一个轻量级的 SVG Spinner 图标 */}
            <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
            Creating...
          </>
        ) : (
          "Create Post"
        )}
      </button>
    </Form>
  );
}
