const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//1
app.get("/static", function(req, res) {
  res.send("Hello World");
});

//2
app.get("/staticJSON", function(req, res) {
  res.json({ text: "Hello World" });
});

//3
app.get("/echo", function(req, res) {
  res.send(req.query.text);
});

//4
app.get("/plus", function(req, res) {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  const sum = a + b;
  res.send(sum.toString());
});

//5
app.get("/plusByJSON", function(req, res) {
  let jsonStr = req.query.jsonText;
  let json = JSON.parse(jsonStr);
  const sum = json.a + json.b
  res.send(String(sum));
});

//6
app.get("/plus/:num1/:num2", function(req, res) {
  let num1 = Number(req.params.num1)
  let num2 = Number(req.params.num2)
  let sum = num1+num2
  res.send(String(sum))
});

//7-8-9
app.get("/checkEvenNumber/:num", function(req, res) {
  let num = Number(req.params.num)
  if(num %2 === 0) {
    res.status(200).end()
  } else {
    res.status(400).end()
  }
});

//10-11-12-13
let array = []
app.post("/number/:num", function(req, res) {
  let num = req.params.num
  array.push(num)
  res.send(array)
});

//14-15-16
app.delete("/number/:num", function(req, res) {
  let num = req.params.num
  array.splice(array.indexOf(num),1)
  res.send(array)
});

//17-18
app.put("/number/:numBefore/:numAfter", function(req, res) {
  let numBefore = req.params.numBefore
  let numAfter = req.params.numAfter
  array[array.indexOf(numBefore)] = numAfter
  res.send(array)
});

//19-20-21
app.post("/countFields", function(req, res) {
  let obj = JSON.parse(req.body.obj)
  let count = 0
  for(let i in Object.keys(obj)) {
    count++
  }
  res.send(String(count))
});


app.listen(3000, function() {
  console.log("Server running at port 3000.");
});
