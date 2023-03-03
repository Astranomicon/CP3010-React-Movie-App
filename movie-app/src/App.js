import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./views/Home";
import Reviews from "./views/Reviews";
import NavbarComp from "./components/Navbar";

function App() {
	const [movies, setMovies] = useState(null);

	// Fetch movies from database
	useEffect(() => {
		fetch("/api/movies")
			.then((response) => response.json())
			.then(setMovies)
			.catch((error) => console.log("This Error " + error));
	}, []);

	if (movies == null) {
		return <h1>Loading...</h1>;
	}

	return (
		<>
			<NavbarComp />
			<Routes>
				{/* Route user to Home Page */}
				<Route
					path='/'
					element={<Home movies={movies} setMovies={setMovies} />}
				/>
				{/* Route user to Review Page */}
				<Route
					path='/reviews'
					element={<Reviews movies={movies} setMovies={setMovies} />}
				/>
			</Routes>
		</>
	);
}

export default App;
