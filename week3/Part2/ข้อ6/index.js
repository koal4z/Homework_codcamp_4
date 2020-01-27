const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const instructorService =require("./services/instructor")
const app = express();

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse application/json
app.use(bodyParser.json());

db.sequelize.sync({ force: false }).then(() => {

  instructorService(app,db)


  app.listen(3000, () => {
    console.log("server running at port 3000");
  });
});
