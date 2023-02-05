import Link from "next/link";

export default function Navbar() {
  const NavOptions = [
    { Event: "About", Link: "#About" },
    { Event: "Skills", Link: "#Skills" },
    { Event: "Projects", Link: "#Projects" },
    { Event: "Contact", Link: "#Contact" },
  ];

  return (
    <nav className="flex flex-row justify-between pt-16 pb-8">
      <div className="text-3xl my-auto">
        <Link href="#">Portfolio</Link>
      </div>
      <div className="flex text-lg">
        <div className="flex">
          {NavOptions.map((NavOptions) => (
            <div key={NavOptions.Event} className="mx-3 my-auto">
              <Link href={NavOptions.Link}>
                <div className="link-underline hover:text-yellow">
                  {NavOptions.Event}
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div>
          <button className="ml-4 tracking-widest resume resume-text p-2">
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
}
