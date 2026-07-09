"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { startTransition } from "react";

export default function SidebarSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = event.target.value.trim();
    const params = new URLSearchParams(searchParams);
    if (keyword) {
      params.set("q", keyword);
    } else {
      params.delete("q");
    }
    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`);
    });
  }
  return (
    <input
      type="text"
      defaultValue={searchParams.get("q") ?? ""}
      placeholder="Search..."
      className="w-full p-2 border border-gray-300 outline-none focus:border-blue-500 rounded-xl"
      onChange={handleSearch}
    />
  );
}
