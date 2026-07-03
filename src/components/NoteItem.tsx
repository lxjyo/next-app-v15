import dayjs from "dayjs";
import type { Note } from "../generated/prisma/client";
import NoteItemContent from "./NoteItemContent";

export default function NoteItem({ note }: { note: Note }) {
  return (
    <NoteItemContent
      id={note.id}
      expandChildren={<div className="mt-2 text-gray-700">{note.content}</div>}
    >
      <div className="font-bold w-full text-ellipsis overflow-hidden whitespace-nowrap">
        {note.title}
      </div>
      <div className="text-sm text-gray-500">
        {dayjs(note.createdAt).format("YYYY-MM-DD HH:mm:ss")}
      </div>
    </NoteItemContent>
  );
}
