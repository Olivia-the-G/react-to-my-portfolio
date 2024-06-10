import ProjectComponent from "./Project";

function PortfolioComponent() {
  return (
    <div>
      <section className="card portfolio-card col">
        <h1>My Projects</h1>
        <p>Projects that appear in both Front End and Back End are Full Stack!</p>
        <ProjectComponent />
      </section>
    </div>
  );
}

export default PortfolioComponent;