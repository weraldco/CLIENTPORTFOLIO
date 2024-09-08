import { Route, Routes } from "react-router-dom";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[90%]">
          <Navbar />
          <div className="w-[100%]">
            <Carousel />
          </div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/about" element={<AboutUs />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
