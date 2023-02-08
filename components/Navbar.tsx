import Link from "next/link";
export default function Navbar() {
  const NavOptions = [
    { Option: "About", Link: "#About" },
    { Option: "Skills", Link: "#Skills" },
    { Option: "Projects", Link: "#Projects" },
    { Option: "Contact", Link: "#Contact" },
  ];

  return (
    <nav className="flex flex-row justify-between pt-14 pb-8">
      <div className="text-3xl my-auto">
        <Link href="#">Portfolio</Link>
      </div>
      <div className="flex text-lg">
        <div className="flex">
          {NavOptions.map((NavOptions) => (
            <div key={NavOptions.Option} className="mx-3 my-auto">
              <Link href={NavOptions.Link}>
                <div className="link-underline hover:text-yellow">
                  {NavOptions.Option}
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div>
          <button
            className="ml-4 tracking-widest resume resume-text p-2"
            onClick={() => {
              window.location.href =
                "https://drive.google.com/uc?export=download&id=1b76NRDU-JntR_lCTJ2_l-FVi7c6BjMTs";
            }}
          >
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
}
