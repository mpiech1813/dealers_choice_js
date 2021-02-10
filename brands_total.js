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
        <div>
          <div id='title'>
            <h1>Boxing Gloves Store</h1>
          </div>
          <div class = 'content'>
            <h2><a href="/models">All Gloves</a></h2>
            ${brands
              .map(
                (name) => `
                <div class='brand_name'>
                  <a href = '/brand/${name.id}'>
                    <img src = '/${name.name}.png'/>
                  </a>
                  <p>
                    <a href = '/brand/${name.id}'>${name.name}</a>
                  </p>
                </div>
              `
              )
              .join('')}
          </div>
        </div>
      </body>
    </html>
  `;
};
