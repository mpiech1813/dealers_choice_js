const e = require('express');

module.exports = (model) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Boxing Gloves Store</title>
        <link />
    </head>
    <body>
        <div>
        <p>
            ${model}
            Model Name: ${model.model} 
            Colour: ${model.colour} 
            Material Type: ${model.material} 
            Made by: ${model.brand_id}
        </p>
        </div>
    </body>
    </html>
  `;
};
