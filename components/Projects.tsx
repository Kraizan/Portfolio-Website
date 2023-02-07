import ProjectBox from "./ProjectBox";

export default function Projects() {
  return (
    <div id="Projects" className="my-16">
      <div className="text-5xl my-8 text-beige font-medium">Projects</div>
      <div className="flex justify-between">
        <ProjectBox
          name="Anisearch"
          subtitle="Anime Database"
          url="url('/images/Anisearch.png')"
          description="An anime searching platform developed using React and Jikan API."
        />
        <ProjectBox
          name="Portfolio"
          subtitle="Digital Art Gallery"
          url="url('/images/Portfolio.png')"
          description="A portfolio website developed for a digital artist."
        />
      </div>
    </div>
  );
}
