"use client";
import { useState } from "react";
import type { Note } from "../generated/prisma/client";
import { useRouter, usePathname } from "next/navigation";

export default function NoteCard({
  id,
  children,
  expandChildren,
}: {
  id: number;
  children?: React.ReactNode;
  expandChildren?: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const paths = pathname?.split("/") || [];
  const selectedId = paths[paths.length - 1] || null;
  const isSelected = selectedId === id.toString();
  const [expanded, setExpanded] = useState(false);

  const handleNoteClick = (noteId: number) => {
    router.push(`/note/${noteId}`);
  };

  return (
    <div
      key={id}
      className={`relative p-2 rounded-md cursor-pointer border-2 ${isSelected ? " border-blue-300" : "border-blue-100"}`}
      onClick={() => handleNoteClick(id)}
    >
      <div
        className="absolute right-2 top-2 cursor-pointer rotate-90 select-none border-2 border-blue-100 h-[20px] w-[20px] rounded-xl flex items-center justify-center text-sm"
        onClick={(e) => {
          e.stopPropagation();
          setExpanded(!expanded);
        }}
      >
        {expanded ? ">" : "<"}
      </div>
      {children}
      {expanded && expandChildren}
    </div>
  );
}
