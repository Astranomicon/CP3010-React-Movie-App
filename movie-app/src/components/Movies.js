import "bootstrap/dist/css/bootstrap.min.css";
// Import Bootstrap components
import { Container, Row, Col, Button, Card } from "react-bootstrap";

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
			<Container>
				<Row>
					{movies.map((movie) => (
						<Col sm={4} className='primary mb-4'>
							<Card className='m-2 h-100'>
								<Card.Img
									className='img-responsive img-thumbnail'
									variant='top'
									src={movie.poster}
								/>
								<Card.Body>
									<Card.Title>{movie.name}</Card.Title>
									<Card.Text>{movie.releaseDate}</Card.Text>
									<Card.Text>{displayStars(movie.rating)}</Card.Text>
									<Card.Text className='actors'>{movie.actors}</Card.Text>
								</Card.Body>
								<Card.Footer>
									<Button
										variant='outline-info'
										onClick={() => onRemove(movie.name)}
									>
										🗑️ Remove Movie
									</Button>
								</Card.Footer>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</>
	);
};

export default Movies;
