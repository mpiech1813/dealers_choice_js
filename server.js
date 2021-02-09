const pg = require('pg');
const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
const client = new pg.Client('postgres://localhost/boxing_gloves'); //<== fill this out with the name of the database once it is created
const brandList = require('./brands');
const modelList = require('./models');

client.connect();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/assets'));

app.get('/', async (req, res) => {
  let data = await client.query('SELECT * FROM brand'); // <= code for psql SELECT * FROM list_name
  const brand = data.rows;
  //   res.send(postList(above_const)) <== post list is HTML for main page
  res.send(brandList(brand));
});

app.get('/models', (req, res) => {});

app.get('/model/:id', async (req, res) => {
  const model = req.params.id;
  let data = await client.query(`SELECT * FROM model WHERE id=${model};`);
  res.send(modelList(data)); //<== postDetails is HTML for particulat item
});

const PORT = 1813;

app.listen(PORT, () => {
  console.log(`App is listeining on port: ${PORT}`);
});
