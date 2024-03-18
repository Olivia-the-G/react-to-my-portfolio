function ProjectComponent() {
  const projects = [
    {
      title: "Blogger",
      deployedUrl: "https://blogger-like-frogger-59f0220c1556.herokuapp.com/",
      gitHubUrl: "https://github.com/Olivia-the-G/blogger",
      image: "/src/assets/blogger-like-frogger.png",
    },
    {
      title: "Hungry Mikey",
      deployedUrl: "https://hungry-hungry-mikey-f614bbce79a1.herokuapp.com/game",
      gitHubUrl: "https://github.com/Olivia-the-G/Hungry_Mikey",
      image: "/src/assets/hungry-mikey.png",
    },
    {
      title: "Weather Dashy",
      deployedUrl: "https://olivia-the-g.github.io/weather-dashy/",
      gitHubUrl: "https://github.com/Olivia-the-G/weather-dashy",
      image: "/src/assets/weather-dashy.png",
    }
  ];

  return (
    <div className="row">
      {projects.map((project, index) => (
        <section key={index} className="card project-card col">
          <h2>{project.title}</h2>
          <img src={project.image} alt={project.title} />
          <div className="overlay">
            <a className="overlay-text" href={project.deployedUrl}>Deployed Project</a>
            <a className="overlay-text" href={project.gitHubUrl}>Github Repo</a>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProjectComponent;