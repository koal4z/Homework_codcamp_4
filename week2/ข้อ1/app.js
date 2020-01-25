const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const getRoute = require("./route/listRoute/get");
const postRoute = require("./route/listRoute/post");

app.use(express.static("public"));

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use("/list", getRoute);

app.use("/list", postRoute);

app.listen(3000, function() {
  console.log("Server start at port 3000.");
});
