import React from "react";
import StyleCss from "./About.module.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const About: React.FC = () => {
  return (
    <div>
      <Header></Header>
      <div className={StyleCss["about-container"]}>
        <div className={StyleCss["about-bg"]}></div>

        <h1 className={StyleCss["about-title"]}>About Us</h1>

        <div className={StyleCss["about-content"]}>
          <h2 className={StyleCss["about-history-title"]}>
            History of Our School
          </h2>

          <div className={StyleCss["about-flex-container"]}>
            <div className={StyleCss["about-paragraph"]}>
              <p className={StyleCss["about-text-bold"]}>
                Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis
                nibh magna. Proin risus erat, fringilla vel purus sit amet.
              </p>
              <p className={StyleCss["about-text-light"]}>
                Mauris mollis lobortis turpis, eget accumsan ante aliquam quis.
                Nam ullamcorper rhoncus sem vitae tempus mattis porta enim. Duis
                fermentum faucibus est, sed vehicula velit sodales vitae.
              </p>
            </div>

            <div className={StyleCss["about-paragraph"]}>
              <p className={StyleCss["about-text-bold"]}>
                Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis
                nibh magna. Proin risus erat, fringilla vel purus sit amet.
              </p>
              <p className={StyleCss["about-text-light"]}>
                Mauris mollis lobortis turpis, eget accumsan ante aliquam quis.
                Nam ullamcorper rhoncus sem vitae tempus mattis porta enim. Duis
                fermentum faucibus est, sed vehicula velit sodales vitae.
              </p>
            </div>
          </div>
        </div>

        <div className={StyleCss["about-year"]}>
          <h3 className={StyleCss["about-year-title"]}>
            2017 - It was a great year
          </h3>
        </div>

        <div className={StyleCss["about-image-section"]}>
          <div className={StyleCss["about-flex-container"]}>
            <div className={StyleCss["about-image-container"]}>
              <img
                src="https://themes.muffingroup.com/be/school2/wp-content/uploads/2018/08/home_school2_pic15.jpg"
                alt="Our School Building"
                className={StyleCss["about-image"]}
              />
            </div>

            <div className={StyleCss["about-text-container"]}>
              <h4 className={StyleCss["about-subtitle"]}>
                Lorem Ipsum: A Placeholder for Text
              </h4>
              <p className={StyleCss["about-text"]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Donec eget justo eu ante pretium cursus non a dui. Nam
                interdum, risus at pellentesque suscipit, sapien eros iaculis
                lorem, sit amet hendrerit orci nisl id quam. Quisque id mi erat.
                Sed ac egestas orci. Proin ac auctor eros. Ut suscipit leo ac
                ligula efficitur, sed laoreet lorem scelerisque. Phasellus
                auctor nulla et libero ullamcorper gravida.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
