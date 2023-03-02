const Movies = ({ movies, setMovies }) => {
	const displayStars = (rating) => {
		let stars = "";
		for (let i = 0; i < parseInt(rating); i++) {
			stars += "⭐";
		}
		return stars;
	};

	const onRemove = async (title) => {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

		var urlencoded = new URLSearchParams();
		urlencoded.append("title", title);

		var requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: urlencoded,
			redirect: "follow",
		};

		try {
			let response = await fetch("/api/removeMovie", requestOptions);
			if (response.status == 200) {
				console.log(`${title} successfully removed from database.`);
				setMovies(movies.filter((movieElement) => movieElement.name !== title));
			}
		} catch (e) {
			console.log("Error: " + e);
		}
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
					<button className='trashCan' onClick={() => onRemove(movie.name)}>
						🗑️
					</button>
				</div>
			))}
		</>
	);
};

export default Movies;
