import React from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";

const page: React.FC = () => {
  return (
    <div>
      <Header></Header>
      <HeroSection></HeroSection>
      {/* <About />  Make sure you render the About component here */}
      <Footer></Footer>
    </div>
  );
};

export default page;
