import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import { default as FrequetlyAskedQuestion } from "../components/FrequetlyAskedQuestion";
import MembersFeedback from "../components/MembersFeedback";
import OurTeam from "../components/OurTeam";
import PopularCause from "../components/PopularCause";
import ServicesSections from "../components/ServicesSections";
import WhyChooseUS from "../components/WhyChooseUs";

const Home = () => {
  return (
    <>
      <div className="w-[100%]">
        <Carousel />
      </div>
      {/* <h1 className="text-3xl">Home Page Section</h1> */}

      <Banner />
      <ServicesSections />
      <WhyChooseUS />
      <PopularCause />
      <OurTeam />
      <FrequetlyAskedQuestion />
      <MembersFeedback />
    </>
  );
};
export default Home;
