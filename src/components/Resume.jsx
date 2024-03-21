function ResumeComponent() {
  return (
    <div>
      <section className="card resume-card col">
        <h1>Resume</h1>
        <a href="/assets/Olivia-Gowan-Resume.pdf" download>Download Resume</a>

        <div className="download-box row"> 
          <div className="box">
            <h2>Front-End Proficiencies</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>JQuery</li>
              <li>Responsive Design</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>Handlebars</li>
            </ul>
          </div>
          <div className="box">
            <h2>Back-End Proficiencies</h2>
            <ul>
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>Sequelize</li>
              <li>NoSQL</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>REST</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResumeComponent;