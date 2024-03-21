"use client";

import { usePathname } from "next/navigation";

export default function Detail({ params }: { params: { slug: string } }) {
  const getName = usePathname();
  return <div>My Post: {params.slug}</div>;
}
