function BioComponent() {
  return (
    <div>
      <section className="card bio-card row">
        <img src="profilephoto.jpg" alt="Olivia Gowan Photo" />
        <div className="bio-text col">
          <h1>Hi, I'm Olivia.</h1>
          <div className="bio-sum-container row">
            <div className="about-me">
              <p>I'm a Full-Stack Web Developer based out of Kingston, ON. As a developer, I am passionate about creating efficient and streamlined databases and learning different coding languages in order to make my job, and everyone else's, just a little bit easier. I've worked on multiple large projects in a team environment where I've developed and honed my abilities as a project leader. Working with my colleagues has given me a love for coding and I hope to one day be able to pursue this job full time as a skilled and experienced web developer. </p>
            </div>
            </div>
            <h2>Here's a brief overview</h2>
            <div className="bio-sum-container row">

            <div className="bio-summary">
              <h2>Education</h2>
              <p>University of Toronto Full Stack Web Developer Bootcamp</p>
            </div>
            <div className="bio-summary">
              <h2>Languages</h2>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Express</li>
                <li>Mongoose ODM</li>
                <li>Sequelize</li>
              </ul>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default BioComponent;