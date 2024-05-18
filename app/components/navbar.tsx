"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const getPath = usePathname();
  return (
    <>
      <div className="navbar bg-base-100 shadow-xl rounded-2xl">
        <div className="navbar-start">
          <Link className="btn btn-ghost text-xl rounded-lg" href={"/"}>
            <Image src={"/alice.png"} width={50} height={50} alt="tanahku" />
          </Link>
        </div>
        <div className="navbar-end m-5 lg:hidden">
          <button
            className=""
            onClick={() => {
              const modal = document.getElementById(
                "my_modal_2"
              ) as HTMLDialogElement | null;
              if (modal) {
                modal.showModal();
              }
            }}
          >
            <FontAwesomeIcon icon={faBarsStaggered} />
          </button>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box flex-nowrap">
              <h1 className="font-base text-lg text-center">
                <Link href={"/"}>Home</Link>
              </h1>
              <h1 className="mt-4 font-base text-lg text-center">
                <Link href={"/about"}>About</Link>
              </h1>
              {/* <h1 className="mt-4 font-semibold text-lg text-center">
                <Link href={"/movie"}>Movie</Link>
              </h1> */}
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                className={getPath === "/" ? "text-md font-bold" : ""}
                href={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={getPath === "/about" ? "text-md font-bold" : ""}
                href={"/about"}
              >
                About
              </Link>
            </li>
            {/* <li>
              <Link
                className={getPath === "/movie" ? "text-md font-bold" : ""}
                href={"/movie"}
              >
                Movie
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
}
