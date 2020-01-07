const express = require('express');
const cors = require('cors');

const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const path = require('path');

const tacoPlaces = require('./routes/api/tacoPlaces');

//body parser cors middleware init
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//DB config
const db = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@tacoplaces-c1azi.mongodb.net/data?retryWrites=true&w=majority`;

//connect to mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

//use routes
app.use('/api/tacoPlaces', tacoPlaces);

// serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use('/', express.static(path.join(__dirname, '/client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//set up server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port}!`));
