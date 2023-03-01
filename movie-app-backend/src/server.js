import express from "express";
import { MongoClient } from "mongodb";

const app = express();
app.use(express.json());
const port = 8000;

app.use(express.urlencoded({ extended: false }));

app.get("/movies", async (req, res) => {
	const client = new MongoClient("mongodb://127.0.0.1:27017");
	await client.connect();

	const db = client.db("movie-app-db");
	const movieData = await db.collection("movies").find({}).toArray();
	console.log(movieData);
	res.json(movieData);
});

app.post("/updateMovies", async (req, res) => {
	const client = new MongoClient("mongodb://127.0.0.1:27017");
	await client.connect();

	const db = client.db("movie-app-db");

	const movieObj = {
		name: req.body.name,
		releaseDate: req.body.releaseDate,
		actors: req.body.actors,
		poster: req.body.poster,
		rating: req.body.rating,
	};

	const newMovie = await db.collection("movies").insertOne(movieObj);

	console.log(newMovie);
	res.redirect("/");
});

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
