import Movies from "../components/Movies";

const Home = ({ movies, setMovies }) => {
	return <Movies movies={movies} setMovies={setMovies} />;
};

export default Home;
