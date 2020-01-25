const express = require("express")
const router = express.Router()

router.post("/posting", function(req,res) {
  res.send("hello Post")
})

module.exports = router