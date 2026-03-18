import "./styles/About.css";
import { zafarData } from "../data/zafarData";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          {zafarData.summary}
        </p>
      </div>
    </div>
  );
};

export default About;

