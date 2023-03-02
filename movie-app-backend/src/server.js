import express from "express";
import { MongoClient } from "mongodb";

const app = express();
app.use(express.json());
const port = 8000;
let movieData = [];
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "../build")));

// Add express path for poster images
app.use(express.static(path.join(__dirname, "posters")));

// Create an API endpoint for the frontend to fetch movies from the database
app.get("/api/movies", async (req, res) => {
	const client = new MongoClient("mongodb://127.0.0.1:27017");
	await client.connect();

	const db = client.db("movie-app-db");
	movieData = await db.collection("movies").find({}).toArray();
	console.log(movieData);
	res.json(movieData);
});

// Create an API endpoint for the frontend to remove movies to the database
app.post('/api/removeMovie', async (req, res) => {
    console.log(req.body.title);
    const client = new MongoClient("mongodb://127.0.0.1:27017");
    await client.connect();

    const db = client.db("movie-app-db");
    const result = await db.collection("movies").deleteOne({ name: req.body.title });

    res.sendStatus(200);

})

// Create an API endpoint for the frontend to add movies to the database
app.post("/api/updateMovies", async (req, res) => {
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

// Display a console message when the server is running
app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
