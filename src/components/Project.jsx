import { SocialIcon } from "react-social-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ProjectComponent({ deviceType }) {
  
  const frontEndProjects = [
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
      title: "First Portfolio",
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

  const backEndProjects = [
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
      title: "writeme.md",
      gitHubUrl: "https://github.com/Olivia-the-G/writeme.md",
      image: "writeme.md.png",
    },
    {
      title: "Lay Off the Graphic Designers",
      gitHubUrl: "https://github.com/Olivia-the-G/lay-off-the-graphic-designers?tab=readme-ov-file",
      image: "lay-off-the-graphic-designers.svg",
    },
    {
      title: "Employee Tracking Chip",
      gitHubUrl: "https://github.com/Olivia-the-G/employee-tracking-chip",
      image: "placeholder.png",
    },
    {
      title: "Thoughts on NoSQL",
      gitHubUrl: "https://github.com/Olivia-the-G/thoughts-on-NoSQL",
      image: "placeholder.png",
    },
    {
      title: "Secret Shopper",
      gitHubUrl: "https://github.com/Olivia-the-G/secret-shopper",
      image: "placeholder.png",
    },
    {
      title: "Whine About Wine",
      gitHubUrl: "https://github.com/Olivia-the-G/next-new-niche",
      image: "placeholder.png",
    }
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div className="portfolio-carousel">
      <div className="front-end-projects-container">
        <h2>Front End Projects</h2>

        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={deviceType !== "mobile"}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={deviceType}
          itemClass="carousel-item-padding-40-px"
          centerMode={true}
        >
          {frontEndProjects.map((project, index) => (
            <div key={index} className={`project-${index + 1}`}>
              <section className="card project-card col">
                <h3>{project.title}</h3>
                <img src={project.image} alt={project.title} />
                <div className="overlay">
                  <a className="overlay-text" href={project.deployedUrl}>Deployed Project</a>
                  <SocialIcon network="github" bgColor="#fff" fgColor="#2a2c46" url={project.gitHubUrl} />
                </div>
              </section>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="back-end-projects-container">
        <h2>Back End Projects</h2>

        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={deviceType !== "mobile"}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={deviceType}
          itemClass="carousel-item-padding-40-px"
          centerMode={true}
        >
          {backEndProjects.map((project, index) => (
            <div key={index} className={`project-${index + 1}`}>
              <section className="card project-card col">
                <h3>{project.title}</h3>
                <img src={project.image} alt={project.title} />
                <div className="overlay">
                  <a className="overlay-text" href={project.deployedUrl}>Deployed Project</a>
                  <SocialIcon network="github" bgColor="#fff" fgColor="#2a2c46" url={project.gitHubUrl} />
                </div>
              </section>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProjectComponent;