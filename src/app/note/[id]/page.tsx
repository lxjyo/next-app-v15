import prisma from "@/lib/prisma";
import NotePreview from "@/components/NotePreview";
import NoteButton from "@/components/NoteButton";

const getNote = async (id: string) => {
  const note = await prisma.note.findUnique({
    where: { id: parseInt(id) },
  });
  return note;
}

export default async function Page({ params }: { params: { id: string } }) {
  const data = await params;
  const note = await getNote(data.id);
  return <div className="flex flex-col overflow-hidden w-full h-full p-4 gap-2">
    <div className="text-sm text-gray-500 flex justify-between items-center">Last updated: {note?.createdAt.toLocaleString()}
      <NoteButton noteId={note?.id}>Edit</NoteButton>
    </div>
    <h1 className="text-2xl font-bold text-center">{note?.title}</h1>
    <NotePreview content={note?.content ?? ''} />
  </div>
}