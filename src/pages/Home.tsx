import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import PopularCause from "../components/PopularCause";
import ServicesSections from "../components/ServicesSections";
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
    </>
  );
};
export default Home;
