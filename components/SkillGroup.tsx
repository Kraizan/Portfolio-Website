import SkillDiv from "./SkillDiv";

export default function SkillGroup(props: any) {
  const skills = props.skills;
  const title = props.title;
  return (
    <div className="my-2">
      <div>
        <div className="text-3xl font-medium mb-4">{props.title}</div>
        {skills.map((skill: { alt: any; src: any; level: any }) => (
          <SkillDiv
            key={skill.alt}
            src={skill.src}
            alt={skill.alt}
            level={skill.level}
          />
        ))}
      </div>
    </div>
  );
}
