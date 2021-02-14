const pg = require('pg');
const app = require('express').Router();
const client = new pg.Client('postgres://localhost/boxing_gloves'); //<== fill this out with the name of the database once it is created
const singleBrand = require('../brand');
const SQL = require('sql-template-strings');

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

module.exports = app;
