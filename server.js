// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

// send the default array
app.get("/iecho", (request, response) => {
  // express helps us take JS objects and send them as JSON
  var text = request.query.text;
  if (text) {
    console.log(text);
    let result = text
      .split("")
      .reverse()
      .join("");
    response.json(result);
  } else {
    response.status(400);
  }
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
