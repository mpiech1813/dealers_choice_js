const app = require('express').Router();
const client = new pg.Client('postgres://localhost/boxing_gloves'); //<== fill this out with the name of the database once it is created
const pg = require('pg');
const SQL = require('sql-template-strings');
const morgan = require('morgan');
const genModelList = require('../models_total');
const modelList = require('../models');

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

module.exports = app;
