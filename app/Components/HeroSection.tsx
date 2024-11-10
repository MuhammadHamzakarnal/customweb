import React from "react";
import StyleCss from "./HeroSection.module.css";
const HeroSection = () => {
  return (
    <div className={StyleCss["hero-container"]}>
      <div className={StyleCss["hero-background"]}></div>

      <div className={StyleCss["hero-content"]}>
        <h1 className={StyleCss["hero-main-heading"]}>Welcome to Our Site</h1>

        <h2 className={StyleCss["hero-subheading"]}>Secondary School</h2>

        <p className={StyleCss["hero-paragraph"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          pretium augue a eros facilisis, nec malesuada magna euismod. Sed
          suscipit lectus vitae metus aliquam, eu congue tortor convallis.
        </p>

        <div className={StyleCss["hero-learn-more"]}>
          <button
            className={
              StyleCss["hero-btn"] + " " + StyleCss["hero-btn-learn-more"]
            }
          >
            Learn More
          </button>
        </div>

        <div className={StyleCss["hero-buttons"]}>
          <button
            className={
              StyleCss["hero-btn"] + " " + StyleCss["hero-btn-teachers"]
            }
          >
            Teachers
          </button>

          <button
            className={
              StyleCss["hero-btn"] + " " + StyleCss["hero-btn-classes"]
            }
          >
            All Classes
          </button>

          <button
            className={
              StyleCss["hero-btn"] + " " + StyleCss["hero-btn-contact"]
            }
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
