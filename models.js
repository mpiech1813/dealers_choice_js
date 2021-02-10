const e = require('express');
const navBar = require('./assets/nav_bar');

module.exports = (model) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Boxing Gloves Store</title>
        <link />
      </head>
      <body>
        ${navBar()}
        <div>
          <p>
            Model Name: ${model.model} Colour: ${model.colour} Material Type:
            ${model.material} Made by: ${model.brand_id}
          </p>
        </div>
      </body>
    </html>
  `;
};
