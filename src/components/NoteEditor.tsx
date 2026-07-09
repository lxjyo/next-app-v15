"use client";
import { useActionState, useState } from "react";
import NotePreview from "./NotePreview";
import { saveNote, deleteNote, type SaveNoteState } from "@/app/note/actions";

const initState: SaveNoteState = {
  message: null,
};

export default function NoteEditor({
  id,
  initTitle,
  initContent,
}: {
  id?: number;
  initTitle?: string;
  initContent?: string;
}) {
  const [submitState, saveAction, isPending] = useActionState(
    saveNote,
    initState,
  );
  const [deleteState, deleteAction, isDeleting] = useActionState(
    deleteNote,
    initState,
  );
  const [title, setTitle] = useState(initTitle ?? "");
  const [content, setContent] = useState(initContent ?? "");

  return (
    <div className="flex gap-4 h-full w-full">
      <form action={saveAction} className="flex gap-4 h-full w-full">
        <div className="flex flex-col gap-2 w-full">
          <input type="hidden" name="id" value={id} />
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="outline-none w-full p-2 border border-blue-100 focus:border-blue-300 rounded-md mb-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            name="content"
            placeholder="Content"
            className="outline-none w-full p-2 border border-blue-100 focus:border-blue-300 rounded-md mb-2 flex-1 resize-none"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="w-1/2 p-2 overflow-hidden">
          <div className="flex justify-end mb-2">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              disabled={isPending}
            >
              {isPending ? "Saving..." : "Save"}
            </button>
            {id && (
              <button
                type="submit"
                className="border border-red-500 text-red-500 px-4 py-2 rounded-md ml-2"
                formAction={deleteAction}
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </button>
            )}
          </div>
          {submitState.message && (
            <div className={`mb-2 text-sm ${submitState.message !== 'Add Success!' ? 'text-red-700' : 'text-green-700'}`}>
              {submitState.message}
            </div>
          )}
          {deleteState.message && (
            <div className={`mb-2 text-sm ${deleteState.message !== 'Delete Success!' ? 'text-red-700' : 'text-green-700'}`}>
              {deleteState.message}
            </div>
          )}
          <div className="mb-2 text-white  bg-blue-300 py-2 px-4 rounded-xl inline-block overflow-hidden">
            Preview
          </div>
          <NotePreview content={content} />
        </div>
      </form>
    </div>
  );
}
