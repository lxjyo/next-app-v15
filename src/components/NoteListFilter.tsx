"use client";
import { useSearchParams } from "next/navigation";
import type { Note } from "../generated/prisma/client";
import NoteItem from "./NoteItem";

export default function NoteListFilter({ notes }: { notes: Note[] }) {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("q") ?? "";
  const filteredNotes = notes.filter((note) => {
    return (
      note.title.toLowerCase().includes(keyword.toLowerCase()) ||
      note.content.toLowerCase().includes(keyword.toLowerCase())
    );
  });
  return (
    <div className="flex-1 overflow-y-auto space-y-2">
      {filteredNotes.map((note: Note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
}
