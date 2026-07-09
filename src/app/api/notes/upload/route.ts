import { NextResponse } from "next/server";
import dayjs from "dayjs";
import path from "path";
import { stat, mkdir, writeFile } from "fs/promises";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("note") as File;
  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
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
    const uniqueFilename = `${Date.now()}-${filename}`;
    await writeFile(path.join(dir, uniqueFilename), buffer);

    const res = await prisma.note.create({
      data: {
        title: filename,
        content: buffer.toString("utf-8"),
      },
    });
    return NextResponse.json({ id: res.id });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save note" }, { status: 500 });
  }
}