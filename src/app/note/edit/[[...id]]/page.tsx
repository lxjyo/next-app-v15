import NoteEditor from "@/components/NoteEditor";
import { getNote } from '../../actions';

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const note = await getNote(id);

  return (
    <NoteEditor
      id={note?.id}
      initTitle={note?.title}
      initContent={note?.content}
    />
  );
}
