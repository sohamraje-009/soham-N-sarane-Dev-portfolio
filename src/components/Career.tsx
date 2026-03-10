import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Developer</h4>
                <h5>Self Employed</h5>
              </div>
              <h3>2022 - Present</h3>
            </div>
            <p>
              Building custom websites with React, JavaScript, and CSS. Integrating third-party APIs
              and delivering high-quality projects within timelines.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Intern</h4>
                <h5>Edu-versity</h5>
              </div>
              <h3>July 2025 - August 2025</h3>
            </div>
            <p>
              Gained hands-on experience in AI concepts, tools, and frameworks. Recognized
              with Letter of Recommendation for outstanding performance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Machine Learning Intern</h4>
                <h5>Suvidha Foundation</h5>
              </div>
              <h3>September 2025 - Present</h3>
            </div>
            <p>
              Contributing to impactful projects while enhancing expertise in AI and ML technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
