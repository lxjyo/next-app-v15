"use server";
import prisma from "@/lib/prisma";
import { revalidatePath  } from "next/cache";
import type { Note } from "@/generated/prisma/client";
import { redirect } from "next/navigation";
import { z } from 'zod';
import dayjs from "dayjs";
import path from "path";
import { stat, mkdir, writeFile } from "fs/promises";

const schema = z.object({
  title: z.string(),
  content: z.string().min(1, '请填写内容').max(100, '字数最多 100')
});


const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export type SaveNoteState = {
  message: string | null;
};

export async function saveNote(
  previousNote: SaveNoteState,
  formData: FormData,
): Promise<SaveNoteState> {
  const idValue = formData.get("id");
  const id = typeof idValue === "string" && idValue !== "" ? parseInt(idValue, 10) : undefined;
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const validationResult = schema.safeParse({ title, content });
  if (!validationResult.success) {
    const errorMessage = validationResult.error.issues.map(issue => issue.message).join(', ');
    return { message: errorMessage };
  }

  if (id) {
    await prisma.note.update({
      where: { id },
      data: {
        title,
        content,
      },
    });
  } else {
    await prisma.note.create({
      data: {
        title,
        content,
      },
    });
  }
  revalidatePath('/', 'layout')
  return { message: `Add Success!` }
}


export async function deleteNote(previosNote: SaveNoteState, formData: FormData){
  const idValue = formData.get("id");
  const id = typeof idValue === "string" && idValue !== "" ? parseInt(idValue, 10) : undefined;
  if (id) {
    await sleep(2000); // Simulate a delay for demonstration purposes
    await prisma.note.delete({
      where: { id },
    });
    revalidatePath('/', 'layout')
    redirect('/note')
  }
  return { message: null };
}

export async function getNote(id: string): Promise<Note | null> {
  if (!id) {
    return null;
  }
  const note = await prisma.note.findUnique({
    where: { id: parseInt(id) },
  });
  return note;
}

export async function importNote(formData: FormData) {
  console.log("importNote called");
  const file = formData.get("note") as File;
  if (!file) {
    throw new Error("No file uploaded");
  }
  const buffer = Buffer.from(await file.arrayBuffer());
  const relativePath = `notes/${dayjs().format("YYYY-MM-DD")}`;
  const dir = path.join(process.cwd(), "public", relativePath);
  try {
    await stat(dir);
  } catch (error) {
    await mkdir(dir, { recursive: true });
  }
  
  try {
    const filename = file.name;
    const uniqueFilename = `${dayjs().format("YYYY-MM-DD-HH-mm-ss")}-${filename}`;
    await writeFile(path.join(dir, uniqueFilename), buffer);

    const res = await prisma.note.create({
      data: {
        title: filename,
        content: buffer.toString("utf-8"),
      },
    });
    revalidatePath('/', 'layout')
    return { id: res.id };
  } catch (error) {
    throw new Error("Failed to save note");
  }
}