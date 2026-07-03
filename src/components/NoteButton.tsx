import Link from "next/link";

export default function NoteButton({ noteId, children }: { noteId?: number; children?: React.ReactNode }) {
  return (
    <Link href={`/note/edit/${noteId??''}`}>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        {children}
      </button>
    </Link>
  );
}
