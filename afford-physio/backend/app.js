const express = require("express");

const app = express();
app.use((request, response, next) => {
  console.log("first");
  next();
});

app.use((request, response, next) => {
  response.send("hello from express");
});

module.exports = app;
