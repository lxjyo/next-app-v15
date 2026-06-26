"use server";

import { revalidatePath } from "next/cache";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const data = ["阅读", "写作", "冥想"];

export async function findToDos() {
  return data;
}

export async function createToDo(prevState: string, formData: FormData) {
  await sleep(500);

  if (Math.random() < 0.5) {
    return "创建失败";
  }

  const todo = formData.get("todo");
  if (typeof todo === "string") {
    data.push(todo);
  }
  revalidatePath("/form2");
  return "创建成功";
}
