import SkillDiv from "./SkillDiv";
import SkillGroup from "./SkillGroup";
export default function Skills() {
  const langs = [
    { src: "/images/C++.png", alt: "C++", level: "90%" },
    { src: "/images/Python.png", alt: "Python", level: "80%" },
    { src: "/images/JS.png", alt: "JavaScript", level: "80%" },
    { src: "/images/TS.png", alt: "TypeScript", level: "70%" },
    { src: "/images/Solidity.png", alt: "Solidity", level: "60%" },
  ];
  const techStack = [
    { src: "/images/MongoDB.png", alt: "MongoDB", level: "65%" },
    { src: "/images/Express.png", alt: "Express", level: "70%" },
    { src: "/images/Reactjs.png", alt: "Reactjs", level: "80%" },
    { src: "/images/Nodejs.png", alt: "Nodejs", level: "75%" },
    { src: "/images/Nextjs.png", alt: "Nextjs", level: "70%" },
  ];
  const miscs = [
    { src: "/images/Git.png", alt: "Git", level: "75%" },
    { src: "/images/Tailwind.png", alt: "Tailwind", level: "80%" },
    { src: "/images/Postman.png", alt: "Postman", level: "75%" },
    { src: "/images/MySQL.png", alt: "MySQL", level: "80%" },
  ];
  return (
    <div className="my-16">
      <div className="text-5xl mb-4 text-beige font-medium">Skills</div>
      <div id="Skills" className="flex justify-between">
        <SkillGroup title="Languages" skills={langs} />
        <SkillGroup title="Development" skills={techStack} />
        <SkillGroup title="Miscellaneous" skills={miscs} />
      </div>
    </div>
  );
}
