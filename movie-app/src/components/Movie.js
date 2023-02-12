const Movie = ({ movie }) => {
	const displayStars = (rating) => {
		let stars = "";
		for (let i = 0; i < parseInt(rating); i++) {
			stars += "⭐";
		}
		return stars;
	};

	const onRemove = (id) => {
		console.log(id.toString() + " removed" + " " + movie.name);
	};

	return (
		<div className='movie'>
			<h3>{movie.name}</h3>
			<img className='moviePoster' src={movie.poster} alt={movie.name} />
			<p>{movie.releaseDate}</p>
			<p>{movie.actors}</p>
			<p>{displayStars(movie.rating)}</p>
			<button className='trashCan' onClick={() => onRemove(movie.id)}>
				🗑️
			</button>
		</div>
	);
};

export default Movie;
