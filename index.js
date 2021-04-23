const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const apartmentRouter = require('./src/routes/apartment-routes');

apartmentRouter.register(app);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
