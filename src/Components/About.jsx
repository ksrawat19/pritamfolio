import "../style/about.css";
import cutePic from "/assets/imgs/cutePixer.webp";
import premierePro from "/assets/icons/premiere-pro.png"
import afterEffect from "/assets/icons/after-effects.png"
import photoshop from "/assets/icons/photoshop.png"
import lightroom from "/assets/icons/photoshop-lightroom.png"
import audition from "/assets/icons/adobe-audition.png"

const About = () => {
  return (
    <section className="about-wrapper">
      <div className="about-heading">
        <h1 className="about-title">About Me</h1>
      </div>

      <div className="about-body">
        <div className="about-image">
          <img src={cutePic} alt="Pritam - Video Editor" />
          <div className="image-overlay"></div>
        </div>

        <div className="about-content">
          <h2 className="about-subheading">
            Telling Stories Through Every Frame
          </h2>
          <p>
            I'm Pritam, a passionate video editor dedicated to crafting compelling
            narratives that resonate. With a keen eye for detail and a love for
            storytelling, I transform raw footage into cinematic experiences — from
            brand films and music videos to dynamic social media content.
          </p>
          <p>
            With years of experience in the industry, I blend technical precision
            with creative flair, using tools like Adobe Premiere Pro and After
            Effects to bring visions to life. My work is driven by rhythm, emotion,
            and a commitment to making every cut count.
          </p>
          <p>
            When I'm not editing, you'll find me drawing inspiration from music,
            cinematography, and the art of visual storytelling.
          </p>
          <a href="#contact" className="about-cta-button">
            Get in Touch
          </a>
        </div>
      </div>

      <div className="about-tools">
        <h3 className="tools-heading">My Editing Toolkit</h3>
        <p className="tools-description">
          I leverage industry-standard tools to deliver professional-grade results,
          ensuring every project shines with polish and creativity.
        </p>
        <div className="tools-icons">
          {[
            { src:photoshop, alt: "Adobe Photoshop", label: "Photoshop" },
            { src:lightroom, alt: "Adobe Lightroom", label: "Lightroom" },
            { src:premierePro, alt: "Adobe Premiere Pro", label: "Premiere Pro" },
            { src:afterEffect, alt: "Adobe After Effects", label: "After Effects" },
            { src:audition, alt: "Adobe Audition", label: "Audition" },
          ].map((tool, index) => (
            <div key={tool.alt} className="tool-item" style={{ '--i': index }}>
              <img src={tool.src} alt={tool.alt} />
              <span className="tool-label">{tool.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;