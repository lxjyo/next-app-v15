import prisma from "../lib/prisma";
import NoteItem from "./NoteItem";

async function getNotes(query: string) {
  const results = await prisma.note.findMany({
    where: {
      title: {
        contains: query,
      },
      content: {
        contains: query,
      },
    },
  });
  return results;
}

export default async function NoteList() {
  const notes = await getNotes("");
  return (
    <div className="flex-1 overflow-y-auto space-y-2">
      {notes.map((note: any) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
}
