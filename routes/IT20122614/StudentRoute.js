const router = require("express").Router();
let Student = require("../../models/IT20122614/Student");
let Topic = require("../../models/IT20122614/RegisterTopic");



router.route("/add").post((req, res) => {

  const name = req.body.name;
  const age = req.body.age;

  const newStudent = new Student({
    name,
    age,
  });

  newStudent
    .save()
    .then(() => {
      res.json("Student added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/topic/add").post((req, res) => {

  const groupe = req.body.groupe;
  const topic = req.body.topic;
  const message = req.body.message;
  const status = false;

  const newTopic = new Topic({
    groupe,
    topic,
    message,
    status
  });

  newTopic
    .save()
    .then(() => {
      res.json("Topic added");
    })
    .catch((err) => {
      console.log(err);
    });
});



module.exports = router;