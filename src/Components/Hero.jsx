import "../style/hero.css";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-intro">Hi, I'm Pritam</div>

            <div className="hero-content">
                <div className="hero-description">
                    <p>
                        A video editor who believes every story deserves to be told beautifully — shaping each moment with clarity, emotion, and cinematic rhythm.
                    </p>
                </div>
                <div className="hero-cta">
                    <button className="hero-button">Contact Me</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
