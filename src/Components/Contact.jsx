import "../style/contact.css"

const Contact = () => {
    return (
        <section className="contact-section">
            <div className="contact-header">
                <h2 className="contact-title">
                    <span>Let's</span>
                    <span>Get in</span>
                    <span>Touch</span>
                </h2>
                <p className="contact-email">rawatks192@gmail.com</p>
            </div>

            <div className="contact-form-wrapper">
                <form className="contact-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        className="contact-input"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="contact-input"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        className="contact-textarea"
                        rows="5"
                        required
                    ></textarea>
                    <button type="submit" className="contact-button">
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
