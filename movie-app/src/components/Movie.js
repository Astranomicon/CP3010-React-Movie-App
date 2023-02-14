const Movie = ({ movie, updateMovie }) => {
	const displayStars = (rating) => {
		let stars = "";
		for (let i = 0; i < parseInt(rating); i++) {
			stars += "⭐";
		}
		return stars;
	};

	const onRemove = (id) => {
		console.log(id.toString() + " removed" + " " + movie.name);
		// updateMovie.func(movies.filter((movie) => movie.id !== id));
	};

	return (
		<div className='movie'>
			<h3>{movie.name}</h3>
			<img className='moviePoster' src={movie.poster} alt={movie.name} />
			<p>{movie.releaseDate}</p>
			<p>{displayStars(movie.rating)}</p>
			<p className="actors">{movie.actors}</p>
			<button className='trashCan' onClick={() => onRemove(movie.id)}>
				🗑️
			</button>
		</div>
	);
};

export default Movie;
