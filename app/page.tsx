"use client";
import { useEffect, useState } from "react";
import Cards from "./components/card";
import { Root, Data, Pagination } from "./components/response";
import { pageview } from "@/ga";

export default function Home({ params }: { params: { slug: string } }) {
  const defaultRootValue: Root = {
    pagination: {
      last_visible_page: 1,
      current_page: 1,
      has_next_page: false,
      items: {
        count: 1,
        total: 1,
        per_page: 1,
      },
    },
    data: [],
  };
  const [result, setResult] = useState<Root>(defaultRootValue);
  const [currentPage, setCurrent] = useState<number>(1);
  const [hasNext, setNext] = useState<boolean>(false);
  const pageSize: number = 10;

  useEffect(() => {
    fetchfunc(pageSize, 1);
    pageview(params.slug);
  }, []);

  const fetchfunc = async (size: number, page: number) => {
    setResult(defaultRootValue);
    const baseURL: string = process.env.NEXT_PUBLIC_BaseURL || "";
    const pathHome: string = process.env.NEXT_PUBLIC_PathHome || "";
    const response = await fetch(
      baseURL + pathHome + `?limit=${size}&page=${page}`,
      {
        method: "GET",
      }
    );
    const data: Root = await response.json();
    setCurrent(data.pagination.current_page);
    setNext(data.pagination.has_next_page);
    setResult(data);
  };

  const nextFunc = () => {
    fetchfunc(pageSize, currentPage + 1);
  };

  const prevFunc = () => {
    fetchfunc(pageSize, currentPage - 1);
  };
  return (
    <>
      <div className="grid mt-3">
        <div className="join flex justify-center">
          <button
            className="join-item btn btn-ghost"
            disabled={currentPage === 1 ? true : false}
            onClick={prevFunc}
          >
            Previous
          </button>
          <button
            className="join-item btn btn-ghost"
            disabled={hasNext ? false : true}
            onClick={nextFunc}
          >
            Next
          </button>
        </div>
        <div className="mt-3"></div>
        <div className="grid-cols-1">
          <Cards data={result.data} />
        </div>
      </div>
    </>
  );
}
