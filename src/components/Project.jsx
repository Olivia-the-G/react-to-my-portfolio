import { SocialIcon } from "react-social-icons";
import 'react-social-icons/github'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
      image: "hungry-mikey.png",
    },
    {
      title: "Weather Dashy",
      deployedUrl: "https://olivia-the-g.github.io/weather-dashy/",
      gitHubUrl: "https://github.com/Olivia-the-G/weather-dashy",
      image: "weather-dashy.png",
    },
    {
      title: "Kumamo",
      deployedUrl: "https://olivia-the-g.github.io/culinary_curation_app/",
      gitHubUrl: "https://github.com/Olivia-the-G/culinary_curation_app",
      image: "kumamo.png",
    },
    {
      title: "My First Portfolio Site",
      deployedUrl: "https://olivia-the-g.github.io/Professional-Portfolio/#",
      gitHubUrl: "https://github.com/Olivia-the-G/Professional-Portfolio",
      image: "professional-portfolio.png",
    },
    {
      title: "Notary Express",
      deployedUrl: "https://floating-lowlands-42980-b282d39f2668.herokuapp.com/",
      gitHubUrl: "https://github.com/Olivia-the-G/notary-express",
      image: "notary-express.png",
    }
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div className="portfolio-carousel">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        // ssr={true} // means to render carousel on server-side.
        infinite={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >

        <div className="project-1"> 
        <section className="card project-card col">
              <h2>{projects[0].title}</h2>
              <img src={projects[0].image} alt={projects[0].title} />
              <div className="overlay">
                <a className="overlay-text" href={projects[0].deployedUrl}>Deployed Project</a>
                <SocialIcon network="github" bgColor="#fff" fgColor="#2a2c46" url={projects[0].gitHubUrl} />
              </div>
            </section>
        </div>
        <div className="project-2">
        <section className="card project-card col">
              <h2>{projects[1].title}</h2>
              <img src={projects[1].image} alt={projects[1].title} />
              <div className="overlay">
                <a className="overlay-text" href={projects[1].deployedUrl}>Deployed Project</a>
                <SocialIcon network="github" bgColor="#fff" fgColor="#2a2c46" url={projects[1].gitHubUrl} />
              </div>
            </section>
        </div>
      </Carousel>;
      <div>
        <h1>Front End Projects</h1>
      </div>
      <div>
        <h1>Back End Projects</h1>
      </div>

    </div>
  );
};

export default ProjectComponent;

// To do: add carosel for projects 

// To do: add different sections for front end and back end projects

// Old code for reference

{/* <div className="projects-container">
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
</div> */}