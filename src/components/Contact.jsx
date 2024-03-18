function ContactComponent() {
  return (
    <div>
      <section className="card contact-card">
        <div className="col">
          <h1>Contact Me</h1>
          <form className="row">
            <div className="col">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
              <label htmlFor="email">Email:</label>
              <input type="text" id="email" name="email" required />
            </div>
            <div className="col">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactComponent;