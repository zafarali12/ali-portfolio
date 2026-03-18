import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { zafarData } from "../data/zafarData";

const Landing = ({ children }: PropsWithChildren) => {
  const nameParts = zafarData.name.split(" ");
  const firstName = nameParts[0];
  const secondName = nameParts[1];
  const lastName = nameParts.slice(2).join(" ");

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              {firstName} {secondName}
              <br />
              <span>{lastName}</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>{zafarData.title1}</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">{zafarData.title2}</div>
              <div className="landing-h2-2">Software</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Full-Stack</div>
              <div className="landing-h2-info-1">Developer</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;

