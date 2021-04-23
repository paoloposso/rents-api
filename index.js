const express = require('express')
const app = express()
const port = 3000

const { AppartmentService } = require('./src/appartments/service');

const service = new AppartmentService({ getByMinimumPrice: (num) => { return 'ok' } });

app.get('/', async (req, res) => {
    res.send(await service.getByMinimumPrice(50));
});

app.get('/byMinimumPrice', (req, res) => {
    res.send(service.getByMinimumPrice(50));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});