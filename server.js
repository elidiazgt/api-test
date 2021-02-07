// server.js
// where your node app starts
const express = require("express");
const app = express();
const cors = require('cors');

app.get("/iecho", cors(), (request, response) => {
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



module.exports = app;