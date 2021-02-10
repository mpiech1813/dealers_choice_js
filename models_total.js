const navBar = require('./assets/nav_bar');

module.exports = (models) => {
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
            ${models
              .map(
                (name) =>
                  `
                  <div class='model_name'>
                    <p>
                      <a href='/models/${name.id}'>${name.model}</a>
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
