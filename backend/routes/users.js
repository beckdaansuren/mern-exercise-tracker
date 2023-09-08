const router = require("express").Router();

let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/edit").put((req, res) => {
  const user = User.find(req.userId);

  //   .then((user) => res.json(user))
  //     .catch((err) => res.status(400).json("Error: " + err))
  user
    .save()
    .then(() => res.json("User saved!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
