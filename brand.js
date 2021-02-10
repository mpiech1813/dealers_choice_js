const navBar = require('./assets/nav_bar');

module.exports = (brands) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Boxing Store</title>
        <link rel='stylesheet' href='/style.css'/>
      </head>
      <body>
        ${navBar()}
        <div id='title'>
          <h1>Boxing Gloves Store</h1>
          <img src = '/${brands[0].brand}.png' class='img_brand'/>
        </div>
        <div class='content'>
          ${brands
            .map(
              (name) => `
                <div>
                  <p>
                    <a href = '/models/${name.modid}'>${name.name}</a>
                  </p>
                </div>
              `
            )
            .join('')}
        </div>
      </body>
    </html>
  `;
};
