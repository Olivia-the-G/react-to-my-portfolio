import { SocialIcon } from "react-social-icons";
import 'react-social-icons/github'

function ProjectComponent() {
  const projects = [
    {
      title: "Blogger",
      deployedUrl: "https://blogger-like-frogger-59f0220c1556.herokuapp.com/",
      gitHubUrl: "https://github.com/Olivia-the-G/blogger",
      image: "public/blogger-like-frogger.png",
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
    },
    {
      title: "Kumamo",
      deployedUrl: "https://olivia-the-g.github.io/culinary_curation_app/",
      gitHubUrl: "https://github.com/Olivia-the-G/culinary_curation_app",
      image: "/src/assets/kumamo.png",
    },
    {
      title: "My First Portfolio Site",
      deployedUrl: "https://olivia-the-g.github.io/Professional-Portfolio/#",
      gitHubUrl: "https://github.com/Olivia-the-G/Professional-Portfolio",
      image: "/src/assets/professional-portfolio.png",
    },
    {
      title: "Notary Express",
      deployedUrl: "https://floating-lowlands-42980-b282d39f2668.herokuapp.com/",
      gitHubUrl: "https://github.com/Olivia-the-G/notary-express",
      image: "/src/assets/notary-express.png",
    }
  ];

  return (
    <div className="projects-container row">
      {projects.map((project, index) => (
        <section key={index} className="card project-card col">
          <h2>{project.title}</h2>
          <img src={project.image} alt={project.title} />
          <div className="overlay">
            <a className="overlay-text" href={project.deployedUrl}>Deployed Project</a>
            <SocialIcon network="github" bgColor="#fff" fgColor="#2a2c46" url={project.gitHubUrl} />
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProjectComponent;