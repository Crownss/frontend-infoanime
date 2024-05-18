import type { Metadata } from "next";
import Page from "./about";
export const metadata: Metadata = {
  title: { default: "InfoAnime", template: "About | InfoAnime" },
};

export default function About({ params }: { params: { slug: string } }) {
  return (
    <>
      <Page params={params} />
    </>
  );
}
