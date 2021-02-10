const pg = require('pg');
const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
const client = new pg.Client('postgres://localhost/boxing_gloves'); //<== fill this out with the name of the database once it is created
const brandList = require('./brands');
const modelList = require('./models');
const genModelList = require('./models_gen');
const SQL = require('sql-template-strings');

client.connect();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/assets'));

app.get('/', async (req, res, next) => {
  try {
    let data = await client.query(SQL`SELECT * FROM brand`); // <= code for psql SELECT * FROM list_name
    const brand = data.rows;
    //   res.send(postList(above_const)) <== post list is HTML for main page
    res.send(brandList(brand));
  } catch (err) {
    next(err);
  }
});

app.get('/models', async (req, res, next) => {
  try {
    let data = await client.query(SQL`SELECT model FROM model`);
    const model = data.rows;
    res.send(genModelList(model));
  } catch (err) {
    next(err);
  }
});

app.get('/models/:id', async (req, res, next) => {
  try {
    const modelNum = req.params.id;
    let data = await client.query(
      SQL`SELECT * FROM model WHERE id=${modelNum};`
    );
    const model = data.rows[0];
    res.send(modelList(model)); //<== postDetails is HTML for particulat item
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res) => {
  console.error(err.stack);
  res.status(404);
  res.send(`Page Not Found`);
});

const PORT = 1813;

app.listen(PORT, () => {
  console.log(`App is listeining on port: ${PORT}`);
});
