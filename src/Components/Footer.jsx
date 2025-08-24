import "../style/footer.css";

const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <section className="footer">
                <div className="footer-brand">
                    <h1 className="footer-title">
                        <span>Pritam</span>
                        <br />
                        <span>Rawat</span>
                    </h1>
                </div>

                <div className="footer-content">
                    <nav className="footer-social">
                        <h2 className="footer-heading">Social</h2>
                        <ul className="social-links">
                            <li>
                                <a href="#">Instagram</a>
                            </li>
                            <li>
                                <a href="#">Facebook</a>
                            </li>
                            <li>
                                <a href="#">Discord</a>
                            </li>
                            <li>
                                <a href="#">Pinterest</a>
                            </li>
                        </ul>
                    </nav>

                    <address className="footer-contact">
                        <h2 className="footer-heading">Contact</h2>
                        <p>
                            <a href="mailto:tempmail@gmail.com">
                                rawatks192@gmail.com
                            </a>
                        </p>
                        <p>
                            <a href="tel:+91437892653">+91 437892653</a>
                        </p>
                        <p>123 Greater Kailash,</p>
                        <p>Editor City, 129303</p>
                    </address>
                </div>
                <div className="footer-bottom">
                    <hr className="footer-divider" />
                    <p className="footer-copyright">
                        Copyright © {new Date().getFullYear()} Pritam Rawat.
                        Website crafted by Khem.
                    </p>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
