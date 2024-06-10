function BioComponent() {
  return (
    <div>
      <section className="card bio-card row">
        <img src="profilephoto.jpg" alt="Olivia Gowan Photo" />
        <div className="bio-text col">
          <h1>About Me</h1>
          <div className="bio-sum-container row">
            <div className="bio-summary">
              <h2>Olivia Gowan</h2>
              <p>Full-Stack Web Developer</p>
            </div>
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