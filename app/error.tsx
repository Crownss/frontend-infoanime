"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <div className="mx-auto lg:py-16 lg:px-6 w-96">
      <Image
        src={"/alice.png"}
        width={200}
        height={200}
        alt="alice"
        className="size-full"
      />
      <div className="mx-auto max-w-screen-xl">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            500
          </h1>
          <p className="text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Something&apos;s went wrong!
          </p>
          <p className="text-lg font-light">
            Sorry, we can&apos;t load that page. You&apos;ll find lots to
            explore on the home page.{" "}
          </p>
          <Link
            href="/"
            className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
