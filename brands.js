module.exports = (brands) => {
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
          ${brands
            .map(
              (name) => `
              <div>
                <p>${name.name}</p>
              </div>
            `
            )
            .join('')}
        </div>
      </body>
    </html>
  `;
};
