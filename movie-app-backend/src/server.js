import express from "express";
import { MongoClient } from "mongodb";

const app = express();
app.use(express.json());
const port = 8000;
let movieData = [];

app.use(express.urlencoded({ extended: false }));

app.get("/movies", async (req, res) => {
	const client = new MongoClient("mongodb://127.0.0.1:27017");
	await client.connect();

	const db = client.db("movie-app-db");
	movieData = await db.collection("movies").find({}).toArray();
	console.log(movieData);
	res.json(movieData);
});

app.post("/updateMovies", async (req, res) => {
	const client = new MongoClient("mongodb://127.0.0.1:27017");
	await client.connect();

	const db = client.db("movie-app-db");

	const movieObj = {
        id: movieData.length + 1,
		name: req.body.movieName,
		releaseDate: req.body.movieReleaseDate,
		actors: req.body.movieActors,
		poster: req.body.moviePoster,
		rating: req.body.movieRating,
	};

	const newMovie = await db.collection("movies").insertOne(movieObj);

	console.log(newMovie);
	res.redirect("/");
});

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
