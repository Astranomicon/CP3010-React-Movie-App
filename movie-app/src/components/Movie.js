const Movie = ({ movie }) => {
	const displayStars = (rating) => {
		let stars = "";
		for (let i = 0; i < parseInt(rating); i++) {
			stars += "⭐";
		}
		return stars;
	};

	return (
		<div className='movie'>
			<h3>{movie.name}</h3>
			<img src={movie.poster} alt={movie.name} />
			<p>{movie.releaseDate}</p>
			<p>{movie.actors}</p>
			<p>{displayStars(movie.rating)}</p>
		</div>
	);
};

export default Movie;
