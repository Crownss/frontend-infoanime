import { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithubAlt } from "@fortawesome/free-brands-svg-icons";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <>
      <div className="mt-10">
        <h1 className="font-bold text-center capitalize text-xl">
          This web has build with{" "}
          <Link
            href="https://nextjs.org"
            className="transition duration-500 ease-in-out hover:text-blue-500"
            rel="noreferrer"
            target="_blank"
          >
            Nextjs
          </Link>{" "}
          as frontend and use jikan API for unofficial opensource my anime list
          API
        </h1>
        <div className="mt-10"></div>
        <div className="container flex flex-nowrap">
          <div className="grow">
            <Link
              className="btn btn-outline font-bold text-center"
              target="_blank"
              rel="noreferrer"
              href="https://instagr.am/brethoniere"
            >
              wanna ask something ? <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </div>
          <div>
            <Link
              className="btn btn-outline font-bold text-center"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/crownss/frontend-infoanime"
            >
              here is the source code: <FontAwesomeIcon icon={faGithubAlt} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
