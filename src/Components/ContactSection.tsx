import "../styles/Contact.css";

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-inner">
        <h2>Kontakt</h2>

        <p className="contact-social">
          <a href="#">Facebook</a> / <a href="#">Instagram</a>
        </p>

        <div className="contact-info">
          <p><strong>Kontakt:</strong></p>
          <p>+420 737 813 605</p>
          <p>petr@stereopromotion.cz</p>
        </div>
      </div>
    </section>
  );
}
