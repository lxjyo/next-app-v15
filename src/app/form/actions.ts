'use server'

import { revalidatePath } from "next/cache";
function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const todos = [
  'Learn Next.js',
  'Learn TypeScript',
  'Learn React',
  'Learn TailwindCSS',
];

export async function findToDos() {
  await delay(500);
  return todos;
}

export async function createToDo(todo: string) {
  await delay(500);
  if (Math.random() < 0.5) {
    return "创建失败";
  }

  if (!todo) {
    return 'Todo cannot be empty';
  }
  todos.push(todo);
  revalidatePath("/form");
}