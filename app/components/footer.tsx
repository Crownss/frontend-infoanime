import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithubAlt } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  let getYear = new Date();
  return (
    <>
      <footer className="flex justify-between fixed inset-x-0 bottom-0 footer items-center p-2 bg-neutral text-neutral- rounded-3xl">
        <aside className="items-center grid-flow-col">
          <Image src={"/alice.png"} width={40} height={40} alt="alice" />
          <p>Copyright © {getYear.getFullYear()} - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-5 place-self-center justify-self-end">
          <Link href={"https://instagr.am/brethoniere"}>
            <FontAwesomeIcon icon={faInstagram} size="2x" title="instagram" />
          </Link>
          <Link href={"https://github.com/crownss/frontend-infoanime"}>
            <FontAwesomeIcon icon={faGithubAlt} size="2x" title="github" />
          </Link>
        </nav>
      </footer>
    </>
  );
}
