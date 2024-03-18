const gitHubUrl = "https://github.com/Olivia-the-G/blogger";
const deployedUrl = "https://blogger-like-frogger-59f0220c1556.herokuapp.com/";

function ProjectComponent() {
  return (
    <div>
      <section className="card project-card col">
        <h1>Project #</h1>
        <img src="../assets/blogger-like-frogger.png"></img>
        <a className="hide" href={deployedUrl}>Deployed Project</a>
        <a className="hide" href={gitHubUrl}>Github Repo</a>
      </section>
    </div>
  );
};

export default ProjectComponent;