/* eslint-disable react/no-unescaped-entities */
import Name from "./Name";
import Link from "next/link";

export default function Greeting() {
  const firstName = ["V", "A", "N", "S", "H", "A", "J"];
  const lastName = ["B", "H", "A", "T", "N", "A", "G", "A", "R"];
  return (
    <div className="text-center text-4xl">
      <div className="my-2">Hello World!</div>
      <div className="my-2">👋</div>
      <div className="my-2">I'm</div>
      <div className="my-10">
        <Name word={firstName} />
        <Name word={lastName} />
      </div>
      <div className="mt-4 text-2xl leading-loose">
        A{" "}
        <Link className="link-underline pb-1 hover:text-green" href="">
          Full Stack Coder
        </Link>
        ,{" "}
        <Link className="link-underline pb-1 hover:text-cyan" href="">
          Competitive Programmer
        </Link>
        <br /> and an aspiring{" "}
        <Link className="link-underline pb-1 hover:text-blue" href="">
          Blockchain Developer
        </Link>
        .
      </div>
    </div>
  );
}
