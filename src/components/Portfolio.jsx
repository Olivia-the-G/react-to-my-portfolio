import ProjectComponent from "./Project";

function PortfolioComponent() {
  return (
    <div>
      <section className="card portfolio-card row">
        <h1>My Projects</h1>
        <ProjectComponent />
      </section>
    </div>
  );
}

export default PortfolioComponent;