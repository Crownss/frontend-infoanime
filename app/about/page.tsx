import type { Metadata } from "next";
import Page from "./about";
export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return <Page />;
}
