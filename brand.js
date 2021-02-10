const navBar = require('./assets/nav_bar');

module.exports = (brands) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Boxing Store</title>
        <link />
      </head>
      <body>
        ${navBar()}
        <div>
          <h1>Boxing Gloves Store</h1>
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
