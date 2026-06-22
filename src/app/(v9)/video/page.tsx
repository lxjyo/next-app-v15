import type { Metadata } from "next";

// 静态元数据
export const metadata: Metadata = {
  // title: "Video",
  title: {
    absolute: 'Video' // 绝对标题，不会和模版拼接结合
  },
  description: "Video Title",
};


export default function Page() {
  return <div>
    <h1 className="text-4xl font-bold">video</h1>
  </div>
}