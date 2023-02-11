import { Movies } from "../components/Movies";
import { useState } from "react";
import data from "../data/movie-data.json";

export const Home = () => {
	const [movies, setMovies] = useState([
		data.movie1,
		data.movie2,
		data.movie3,
		data.movie4,
		data.movie5,
		data.movie6,
	]);

	return <Movies movies={movies} />;
};
