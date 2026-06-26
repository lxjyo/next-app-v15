"use client";

import { useActionState, startTransition } from "react";
import { deleteTodo } from "./actions";

export default function DeleteBtn({ id }: { id: number }) {
  const [state, action, isPending] = useActionState(deleteTodo, '未删除');

  return (
    <button
      disabled={isPending}
      onClick={() => {
        startTransition(() => {
          action(id);
        });
      }}
      className="bg-indigo-600 disabled:bg-gray-500 py-2 rounded text-white px-2 ml-2"
    >
      {isPending ? "Deleting" : "Delete"} {state}
    </button>
  );
}
