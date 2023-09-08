const router = require("express").Router();

let Exercise = require("../models/exercise.model");

router.route("/").get((req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = new Date.parse(req.body.date);

  const newExercise = new Exercise({ username, description, duration, date });

  newExercise
    .save()
    .then(() => res.json("Exercise added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/edit").put((req, res) => {
  const exercise = Exercise.find(req.exerciseId);

  //   .then((exercise) => res.json(exercise))
  //     .catch((err) => res.status(400).json("Error: " + err))
  exercise
    .save()
    .then(() => res.json("Exercise saved!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
