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
          <h1>Boxing Gloves Store</h1>
          <h2><a href="/models">All Gloves</a></h2>
          ${brands
            .map(
              (name) => `
              <div>
                <p>
                  <a href = '/brand/${name.id}'>${name.name}</a>
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
