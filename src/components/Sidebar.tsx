import Link from "next/link";
import NoteButton from "./NoteButton";
import NoteList from "./NoteList";
import NoteListSkeleton from "./NoteListSkeleton";
import SidebarSearch from "./SidebarSearch";
import { Suspense } from "react";

export default function Sidebar() {

  return (
    <div className="flex flex-col overflow-hidden w-85 h-full bg-white p-4 gap-4">
      <h1 className="text-center font-bold">
        <Link href="/">Notes</Link>
      </h1>
      <div className="flex w-full justify-between gap-2 items-center">
        <SidebarSearch />
        <NoteButton>New</NoteButton>
      </div>
      <Suspense fallback={<NoteListSkeleton />}>
        <NoteList/>
      </Suspense>
    </div>
  );
}
