import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import MemberCount from "../components/MemberCount";
import MembersFeedback from "../components/MembersFeedback";
import OurTeam from "../components/OurTeam";
import PopularCause from "../components/PopularCause";
import ServicesSections from "../components/ServicesSections";
import SubscribeUs from "../components/SubscribeUs";
import WhyHireUs from "../components/WhyHireUs";

const Home = () => {
  return (
    <>
      <div className="w-[100%]">
        <Carousel />
      </div>
      {/* <h1 className="text-3xl">Home Page Section</h1> */}

      <Banner />
      <ServicesSections />
      <WhyHireUs />
      <PopularCause />
      <OurTeam />
      <MemberCount />
      <MembersFeedback />
      <SubscribeUs />
      <ContactUs />
      <Footer />
    </>
  );
};
export default Home;
