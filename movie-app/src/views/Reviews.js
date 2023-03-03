import React from "react";
import { Card, Form, Button } from "react-bootstrap";

const Reviews = ({ movies, setMovies }) => {
	return (
		<>
			<center>
				<br />
				<Card style={{ width: "50rem", padding: "10px" }}>
					<Form
						method='post'
						action='/api/updateMovies'
						encType='multipart/form-data'
					>
						{/* Form Group for Movie Name */}
						<Form.Group className='mb-2' controlId='movieName'>
							<Form.Control
								name='movieName'
								type='text'
								placeholder='Enter Movie Name'
							/>
						</Form.Group>

						{/* Form Group for Movie Release Date */}
						<Form.Group className='mb-2' controlId='movieReleaseDate'>
							<Form.Control
								name='movieReleaseDate'
								type='text'
								placeholder='Enter Release Date'
							/>
						</Form.Group>

						{/* Form Group for Movie Actors */}
						<Form.Group className='mb-2' controlId='movieActors'>
							<Form.Control
								name='movieActors'
								type='text'
								placeholder='Enter Actors List'
							/>
						</Form.Group>

						{/* Form Group for Movie Rating */}
						<Form.Group className='mb-2' controlId='movieRating'>
							<Form.Select
								name='movieRating'
								aria-label='Default select example'
							>
								<option>Select a Movie Rating</option>
								<option value='1'>1 Star</option>
								<option value='2'>2 Stars</option>
								<option value='3'>3 Stars</option>
								<option value='4'>4 Stars</option>
								<option value='5'>5 Stars</option>
							</Form.Select>
						</Form.Group>

						{/* Form Group for Movie Poster */}
						<Form.Group className='mb-3' controlId='moviePoster'>
							<Form.Control name='moviePoster' type='file' />
						</Form.Group>

						<Button variant='primary' type='submit'>
							Add Movie
						</Button>
					</Form>
				</Card>
			</center>
		</>
	);
};

export default Reviews;
