module.exports = (models) => {
  return `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Boxing Store</title>
          <link />
        </head>
        <body>
          <div>
            <h1>Boxing Gloves Store</h1>
            ${models
              .map(
                (name) => `
                <div>
                  <p>${name.model}</p>
                </div>
              `
              )
              .join('')}
          </div>
        </body>
      </html>
    `;
};
