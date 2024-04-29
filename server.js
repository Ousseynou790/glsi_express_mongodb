const express = require("express");
const router = require("./routes/movie.routes"); // Import du routeur des films
const app = express();
app.use(express.json());
app.use("/api/movies", router); // Utilisation du routeur des films pour les requêtes liées aux films
const logger = require("morgan");

const PORT = process.env.PORT || 4002;

const db = require("./models");

//app.use(bodyParser.urlencoded({ extended: true }));

db.mongoose
  .connect(db.url)
  .then(() => {
    console.log(`Connected to the database '${db.url}' !`);
  })
  .catch(err => {
    console.log(`Cannot connect to the database '${db.url}' !`, err);
    process.exit();
  });

app.use(logger("dev"));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the movie application." });
});

app.listen(PORT, () => {
  console.log(`Backend express server is running on port ${PORT}.`);
});
