const express = require('express');
const router = express.Router();

//TacoPlace model
const TacoPlace = require('../../models/TacoPlace');

// @route GET api/tacoPlaces
// @desp get all tacoPlaces
// @access Public
router.get('/', (req, res) => {
  TacoPlace.find()
    .sort({ date: -1 })
    .then(tacoPlaces => res.json(tacoPlaces));
});

// @route POST api/tacoPlaces
// @desp create new tacoPlace
// @access Public
router.post('/', (req, res) => {
  const newTacoPlace = new TacoPlace({
    name: req.body.name
  });

  newTacoPlace.save().then(tacoPlace => res.json(tacoPlace));
});

module.exports = router;
