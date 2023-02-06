const express = require("express");
const app = express();
const port = 1993;
const bodyParser = require("body-parser");

var path = require("path");

// middleware for dev
var morgan = require("morgan");
app.use(morgan("combined"));


//set view engine
// app.set("view engine","jade")

// set base folder view
// app.set("views", path.join(__dirname, "/views"));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({
    info: "Node.js, Express, and Postgres API",
  });
});

var server = app.listen(port, function () {
  console.log("Node server is running..");
});