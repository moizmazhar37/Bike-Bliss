import React from "react";
import Navbar from "./components/Navbar/Navbar";
import DisplayContainer from "./components/TopDisplay/DisplayContainer"; // import BikeFeature from './components/BikeFeature';
import FaqsContainer from "./components/FAQs/FaqsContainer";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";
import Testimonial from "./components/Testimonial/Testimonial";
import img from "./public/john.png";
import MainFeature from "./components/MainFeature/MainFeature";

export default function Home() {
  return (
    <>
      <Navbar />
      <DisplayContainer />
      <MainFeature />
      <Testimonial
        name=" John S."
        position="Postion"
        companyName="Company Name"
        testimonyText='"Absolutely love my ThunderBolt! Smooth ride, sleek design, and unbeatable performance"'
        imageSrc={img}
      />
      <FaqsContainer />
      <GetStarted />
      <Footer />
    </>
  );
}
