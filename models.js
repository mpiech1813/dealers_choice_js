const e = require('express');
const navBar = require('./assets/nav_bar');

module.exports = (model) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Boxing Gloves Store</title>
        <link rel='stylesheet' href='/style.css'/>
      </head>
      <body>
        ${navBar()}
        <div id='title'>
          <img src='/${model.brand_name}.png' class='img_brand'/>
        </div>
        <div class='specs'>
          <p>
            Model Name: ${model.name} <br/>
          </p>
          <p>
            Colour: ${model.colour} <br/>
          </p>
          <p>
            Material Type: ${model.material} <br/>
          </p>
          <p>
            Made by: ${model.brand_name} <br/>
          </p>
        </div>
      </body>
    </html>
  `;
};
