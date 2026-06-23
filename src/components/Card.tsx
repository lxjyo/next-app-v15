'use client'

import { useEffect } from "react";

export default function Card({ data, createAction }: { data: string, createAction: () => Promise<string> }) {
  useEffect(() => {
    createAction().then((data) => console.log(data));
  }, []);
  return <div className="p-4 m-4 rounded-md bg-cyan-100">{data}</div>;
}
