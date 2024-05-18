"use client";

export default function Detail({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>;
}
