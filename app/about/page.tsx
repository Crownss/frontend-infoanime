import Metadata from "next";
import Page from "./about";
export const metadata: Metadata = {
  title: "About",
};

export default function About({ params }: { params: { slug: string } }) {
  return (
    <>
      <Page params={params} />
    </>
  );
}
