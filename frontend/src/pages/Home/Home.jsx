import "./index.css";
import HeroSection from "../Home/LandingPage/HeroSection/HeroSection";
import FeatureSection from "../Home/LandingPage/FeatureSection/FeatureSection";
import HowWeWork from "./../Home/LandingPage/HowWeWorkSection/HowWeWorkSection";
import { ContactUsSection } from "../Home/LandingPage/ContactUsSection/ContactUsSection";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <HowWeWork />
      <FeatureSection />
      <ContactUsSection />
    </>
  );
};
