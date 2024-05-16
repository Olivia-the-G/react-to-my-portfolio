function ContactComponent() {
  return (
    <div>
      <section className="card contact-card">
        <div className="big-contact-box col">
          <div className="contact-box row">
          <img src="/laptop.avif" alt="Olivia Gowan" />

          <form className="form-box col">
          <h1>Contact Me</h1>

            <div className="outer-form row">
              <div className="info-box col">
                <p>olivia.a.gowan@gmail.com</p>
                <button className="emailBtn" type="button">Send Me a Message</button>
                {/* <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" required /> */}
              </div>
              {/* <div className="mess-box col">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required />
              </div> */}
            </div>
            {/* <button type="submit">Submit</button> */}
          </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactComponent;