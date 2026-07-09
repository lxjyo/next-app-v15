"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { importNote } from "@/app/note/actions";
import { useFormStatus } from "react-dom";

function Submit() {
  const { pending } = useFormStatus()
  return <button disabled={pending}>{pending ? 'Submitting' : 'Submit'}</button>
}

export default function NoteImport() {
  const router = useRouter();
  // const handleChange = async (e : React.ChangeEvent<HTMLInputElement>) => {
  //   const files = e.target.files;
  //   if (!files) return;
  //   const formData = new FormData();
  //   formData.append("note", files[0]);
  //   try {
  //     const response = await fetch("/api/notes/upload", {
  //       method: "POST",
  //       body: formData,
  //     });
  //     if (response.ok) {
  //       const data = await response.json();
  //       router.push(`/note/${data.id}`);
  //       router.refresh();
  //     }
  //   } catch (error) {
  //     console.error("Failed to import note:", error);
  //   }
  //   e.target.type = "file";
  // };

  // return (
  //     <div className="text-center flex flex-col gap-2 cursor-pointer border border-blue-300 rounded-md p-2">
  //       <label className="w-full" htmlFor="file">Import Note</label>
  //       <input className="w-full" type="file" id="file" name="note" accept=".md"
  //         onChange={handleChange}
  //       />
  //     </div>
  // );

  const formRef = useRef<HTMLFormElement>(null);
  const uploadNote = async (formData: FormData) => {
    console.log('111')
    const file = formData.get("note") as File;
    if (!file) {
      throw new Error("No file uploaded");
    }
    const data = await importNote(formData);
    router.push(`/note/${data.id}`);
    formRef.current?.reset();
  };

  return (
    <form
      action={uploadNote}
      method="post"
      encType="multipart/form-data"
      className="cursor-pointer"
      ref={formRef}
    >
      <div className="text-center flex flex-col gap-2 cursor-pointer border border-blue-300 rounded-md p-2">
        <label className="w-full" htmlFor="file">
          Import Note
        </label>
        <input
          className="w-full"
          type="file"
          id="file"
          name="note"
          accept=".md"
        />
        <Submit />
      </div>
    </form>
  );
}
