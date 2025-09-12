import Hero from "./Hero";
import Benefits from "./Benefits";
import HowItWorks from "./HowItWorks";
import Testimonial from "./Testimonial";
import Pricing from "./Pricing";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <HowItWorks />
      <Testimonial />
      <Pricing />
      <Footer />
    </div>
  );
};

export default LandingPage;