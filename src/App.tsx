import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Services from './pages/Services';

function App() {
	return (
		<>
			<div className="flex justify-center">
				<div className="w-[1280px]">
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/services" element={<Services />}></Route>
						<Route path="/aboutus" element={<AboutUs />}></Route>
						<Route path="*" element={<PageNotFound />}></Route>
					</Routes>
				</div>
			</div>
		</>
	);
}

export default App;
