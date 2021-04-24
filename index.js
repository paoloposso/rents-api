const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to mongodb');
});

const apartmentRouter = require('./src/routes/apartment-routes');

apartmentRouter.register(app);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
