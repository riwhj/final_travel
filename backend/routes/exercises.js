
const router = require('express').Router();
let Exercise = require('../models/exercise.model');


router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/travel').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/createLocation').post((req, res) => {
  const name = req.body.name;
  const image = req.body.image;
  const place =req.body.place;
  const detail =req.body.detail;

  const newExercise = new Exercise({
    name,
    image,
    place,
    detail,
  });

  newExercise.save()
  .then(() => res.json('createLocation  added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/getLocation:id').get((req, res) => {
  Exercise.findById(req.params.id)
  .then(exercise => {
    exercise.name = req.body.name;
    exercise.image = req.body.image;
    exercise.place =req.body.place;
    exercise.detail =req.body.detail;
    // exercise.save()
    //   .then(() => res.json('Exercise updated!'))
    //   .catch(err => res.status(400).json('Error: ' + err));
  })
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.name = req.body.name;
      exercise.image = req.body.image;
      exercise.place =req.body.place;
      exercise.detail =req.body.detail;

      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;