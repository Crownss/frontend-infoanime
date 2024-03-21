import type { Metadata } from "next";
import "tailwindcss/tailwind.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: { default: "InfoAnime", template: "%s | InfoAnime" },
  description:
    "InfoAnime adalah informasi seputar anime series tv yg akan rilis dan movie, berdasarkan informasi bersumber dari MyAnimeList",
  icons: [
    { rel: "icon", url: "/alice.png", sizes: "16x16", type: "image/png" },
    {
      rel: "apple-touch-icon",
      url: "/alice.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      rel: "shorcut icon",
      url: "/alice.png",
      sizes: "16x16",
      type: "image/png",
    },
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://infoanime.site",
    title: "InfoAnime",
    description:
      "InfoAnime adalah informasi seputar anime series tv yg akan rilis dan movie, berdasarkan informasi bersumber dari MyAnimeList",
    siteName: "infoanime",
    images: [
      {
        url: "https://infoanime.site/alice.png",
      },
    ],
    locale: "id",
  },
  publisher: "InfoAnime",
  referrer: "no-referrer-when-downgrade",
  authors: { name: "infoanime", url: "infoanime.site" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container mx-auto">
        <Navbar />
        {/* <div className="mt-20"></div> */}
        <div className="">{children}</div>
      </body>
    </html>
  );
}
