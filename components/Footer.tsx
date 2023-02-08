import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="my-16">
      <footer className="text-xl text-center flex flex-col">
        <small>&copy; Copyright 2023</small>
        <div className="flex justify-center h-8">
          <Link
            href="https://linktr.ee/kraizan"
            target={"_blank"}
            className="link-underline py-1 text-lg flex justify-center items-center"
          >
            <div>Kraizan</div>
            <Image
              src={require("/public/images/linktree.png")}
              alt="Linktree"
              className="w-6 h-7 ml-2"
            />
          </Link>
        </div>
      </footer>
    </div>
  );
}
