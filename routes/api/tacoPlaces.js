const express = require('express');
const router = express.Router();

//TacoPlace model
const TacoPlace = require('../../models/TacoPlace');

//CORS
router.use(function(req, res, next) {
  res.header(
    'Access-Control-Allow-Headers',
    '*',
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
    .then(tacoPlaces => res.json(tacoPlaces))
    .catch(err => console.log('server error GET =>', err));
});

// @route POST api/tacoPlaces
// @desp create new tacoPlace
// @access Public
router.post('/add', (req, res) => {
  const newTacoPlace = new TacoPlace({
    name: req.body.name,
    address: req.body.address,
    rating: req.body.rating
  });

  newTacoPlace
    .save()
    .then(json => console.log('server successfully posted data'))
    .then(res.end())
    .catch(err => console.log('server error POST =>', err));
});

module.exports = router;
