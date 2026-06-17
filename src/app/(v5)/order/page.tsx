import Link from "next/link";

export default function OrderPage() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <h1 className="text-2xl font-bold">Order</h1>
      <Link href="/login" className="ml-4 text-blue-500 underline">
        login
      </Link>
    </div>
  );
}