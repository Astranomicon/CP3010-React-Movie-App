import Movie from "./Movie";

const Movies = ({ movies, setMovies }) => {
	const displayStars = (rating) => {
		let stars = "";
		for (let i = 0; i < parseInt(rating); i++) {
			stars += "⭐";
		}
		return stars;
	};

	const onRemove = (id) => {
		console.log("Movie ID " + id.toString() + " removed.");
		let newMovies = movies.filter((movie) => movie.id !== id);
		setMovies(newMovies);
	};

	return (
		<>
			{movies.map((movie) => (
				<div className='movie'>
					<h3>{movie.name}</h3>
					<img className='moviePoster' src={movie.poster} alt={movie.name} />
					<p>{movie.releaseDate}</p>
					<p>{displayStars(movie.rating)}</p>
					<p className='actors'>{movie.actors}</p>
					<button className='trashCan' onClick={() => onRemove(movie.id)}>
						🗑️
					</button>
				</div>
			))}
		</>
	);
};

export default Movies;
