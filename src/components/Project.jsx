function ProjectComponent() {
  const projects = [
    {
      title: "Blogger",
      deployedUrl: "https://blogger-like-frogger-59f0220c1556.herokuapp.com/",
      gitHubUrl: "https://github.com/Olivia-the-G/blogger",
      image: "blogger-like-frogger.png",
    },
    {
      title: "Hungry Mikey",
      deployedUrl: "https://hungry-hungry-mikey-f614bbce79a1.herokuapp.com/game",
      gitHubUrl: "https://github.com/Olivia-the-G/Hungry_Mikey",
      image: "hungry-hungry-mikey.png",
    },
    {
      title: "Weather Dashy",
      deployedUrl: "https://olivia-the-g.github.io/weather-dashy/",
      gitHubUrl: "https://github.com/Olivia-the-G/weather-dashy",
      image: "weather-dashy.png",
    }
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <section key={index} className="card project-card col">
          <h1>{project.title}</h1>
          <img src={project.image} alt={project.title} />
          <a className="hide" href={project.deployedUrl}>Deployed Project</a>
          <a className="hide" href={project.gitHubUrl}>Github Repo</a>
        </section>
      ))}
    </div>
  );
};

export default ProjectComponent;