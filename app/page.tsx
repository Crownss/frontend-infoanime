"use client";
import { useEffect } from "react";
import Cards from "./components/card";

export default function Home() {
  // useEffect(() => {
  //   console.log(process.env.NEXT_PUBLIC_BaseURL);
  // });
  return (
    <>
      <div className="grid mt-3">
        <div className="join flex justify-center">
          <button
            className="join-item btn btn-ghost"
            // disabled={currentPage === 1 ? "disable" : ""}
            // onClick={prevFunc}
          >
            Previous
          </button>
          <button
            className="join-item btn btn-ghost"
            // disabled={hasNext ? "" : "disable"}
            // onClick={nextFunc}
          >
            Next
          </button>
        </div>
        <div className="mt-3"></div>
        <div className="grid-cols-1">
          <Cards />
        </div>
      </div>
    </>
  );
}
