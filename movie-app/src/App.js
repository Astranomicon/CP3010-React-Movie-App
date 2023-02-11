import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { Reviews } from "./views/Reviews";
import { Navbar } from "./components/Navbar";


function App() {


	return (
		<>
			<Navbar />
			<Routes>
        {/* Route user to Home Page */}
				<Route path='/' element={<Home />} />
        {/* Route user to Review Page */}
				<Route path='/reviews' element={<Reviews />} />
			</Routes>
		</>
	);
}

export default App;
