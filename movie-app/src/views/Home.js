import { useState, useEffect } from "react";
import Movies from "../components/Movies";

const Home = () => {
	const [movies, setMovies] = useState(null);

	useEffect(() => {
		fetch("./movie-data.json")
			.then((response) => response.json())
			.then(setMovies)
			.catch((error) => console.log("This Error " + error));
	}, []);

	if (movies == null) {
		return <h1>Loading...</h1>;
	}

	return <Movies movies={movies} />;
};

export default Home;
