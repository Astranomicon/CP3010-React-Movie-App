import React from "react";

const Reviews = ({ movies, setMovies }) => {
	let newMovies = movies;

	const [movieName, setMovieName] = React.useState("");
	const [movieReleaseDate, setMovieReleaseDate] = React.useState("");
	const [movieActors, setMovieActors] = React.useState("");
	const [moviePoster, setMoviePoster] = React.useState("");
	const [movieRating, setMovieRating] = React.useState("");

	const movieChange = (event) => {
		setMovieName(event.target.value);
	};

	const releaseDateChange = (event) => {
		setMovieReleaseDate(event.target.value);
	};

	const actorsChange = (event) => {
		setMovieActors(event.target.value);
	};

	const posterChange = (event) => {
		setMoviePoster(event.target.value);
	};

	const ratingChange = (event) => {
		setMovieRating(event.target.value);
	};

	return (
		<div>
			<form
				method='post'
				action='/api/updateMovies'
				encType='multipart/form-data'
			>
				<div className='form-container'>
					<input
						type='text'
						id='movieName'
						name='movieName'
						placeholder='Movie Name'
						onChange={movieChange}
					/>
					<input
						type='text'
						id='movieReleaseDate'
						name='movieReleaseDate'
						placeholder='Release Date'
						onChange={releaseDateChange}
					/>
					<input
						type='text'
						id='movieActors'
						name='movieActors'
						placeholder='Actors'
						onChange={actorsChange}
					/>
					<select name='movieRating' onChange={ratingChange}>
						<option value=''></option>
						<option value='1'>1 Star</option>
						<option value='2'>2 Stars</option>
						<option value='3'>3 Stars</option>
						<option value='4'>4 Stars</option>
						<option value='5'>5 Stars</option>
					</select>
					<input type='file' name='moviePoster' />
					{/* <button className='btn'>Add Movie Review</button> */}
					<input type='submit' value='Submit' />
				</div>
			</form>
		</div>
	);
};

export default Reviews;
