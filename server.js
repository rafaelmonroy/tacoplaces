const express = require('express');
const mongoose = require('mongoose');
const app = express();

const tacoPlaces = require('./routes/api/tacoPlaces');

//body parser middleware init
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//DB config
const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

//use routes
app.use('/api/tacoPlaces', tacoPlaces);

//set up server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port}!`));
