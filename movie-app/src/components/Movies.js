import Movie from "./Movie";

export const Movies = ({ movies }) => {
	return (
		<>
			{movies.map((movie) => (
				<Movie key={movie.id} movie={movie} />
			))}
		</>
	);
};
