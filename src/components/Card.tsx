'use client'

export default function Card({ data }: { data: string }) {
  return <div className="p-4 m-4 rounded-md bg-cyan-100">{data}</div>;
}
