const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

require('dotenv').config();

(() => {
  const mongoose = require('mongoose');
  mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('connected to mongodb');
  });
})();

app.use(express.json());

const apartmentRouter = require('./src/routes/apartment-routes');

apartmentRouter.register(app);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
