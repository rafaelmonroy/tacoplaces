const express = require('express');
const router = express.Router();

//TacoPlace model
const TacoPlace = require('../../models/TacoPlace');

//CORS
router.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

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
    name: req.body.name,
    address: req.body.address
  });

  newTacoPlace
    .save()
    .then(tacoPlace => res.json(tacoPlace))
    .then(res.redirect('/'))
    .catch(err => console.log('server', err));
});

module.exports = router;
