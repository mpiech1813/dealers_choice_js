const pg = require('pg');
const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
const client = new pg.Client('postgres://localhost/boxing_gloves'); //<== fill this out with the name of the database once it is created
const brandList = require('./brands_total');
const SQL = require('sql-template-strings');
const singleBrand = require('./brand');
const genModelList = require('./models_total');
const modelList = require('./models');

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
    let data = await client.query(SQL`SELECT * FROM model`);
    const model = data.rows;
    res.send(genModelList(model));
    //'<a href:/models/${id}'
  } catch (err) {
    next(err);
  }
});

app.get('/models/:id', async (req, res, next) => {
  try {
    const modelNum = req.params.id;
    let data = await client.query(
      SQL`SELECT mod.id AS modid, mod.model AS name, mod.colour AS colour, mod.material AS material, brd.name AS brand_name 
        FROM model AS mod
        JOIN brand AS brd ON mod.brand_id = brd.id WHERE mod.id = ${modelNum};`
    );
    const model = data.rows[0];
    res.send(modelList(model)); //<== postDetails is HTML for particulat item
  } catch (err) {
    next(err);
  }
});
app.get('/brand/:id', async (req, res, next) => {
  try {
    const brandNum = req.params.id;
    let data = await client.query(SQL`SELECT mod.id AS modid, mod.model AS name, mod.colour AS colour, mod.material AS material, brd.name AS brand
      from model AS mod
      JOIN brand AS brd ON mod.brand_id = brd.id
      WHERE mod.brand_id = ${brandNum};`);
    const brandView = data.rows;
    res.send(singleBrand(brandView));
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

//create nav bar to Express Router and Rest Principal 40:00
// SQL to prevent sql injection
