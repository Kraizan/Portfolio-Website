export default function ProjectBox(props: any) {
  const project = props;
  return (
    <div className="container w-[45%]">
      <div className="front" style={{ backgroundImage: project.url }}>
        <div className="inner">
          <p>{project.name}</p>
          <span>{project.subtitle}</span>
        </div>
      </div>
      <div className="back">
        <div className="inner">
          <p className="text-light-black">{project.description}</p>
        </div>
      </div>
    </div>
  );
}
