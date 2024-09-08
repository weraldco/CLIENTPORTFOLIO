import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import ServicesSections from "../components/ServicesSections";

const Home = () => {
  return (
    <>
      <div className="w-[100%]">
        <Carousel />
      </div>
      <div className="h-[350px] bg-slate-200"></div>
      {/* <h1 className="text-3xl">Home Page Section</h1> */}

      <Banner />
      <ServicesSections />
    </>
  );
};
export default Home;
