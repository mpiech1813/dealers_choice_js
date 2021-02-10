const navBar = require('./assets/nav_bar');

module.exports = (models) => {
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
          ${models
            .map(
              (name) =>
                `
                <div>
                  <p>
                    <a href='/models/${name.id}'>${name.model}</a>
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
