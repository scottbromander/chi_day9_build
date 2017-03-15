var express = require("express");
var router = express.Router();

router.get("/", function(req,res){
    res.send("Harrow");
});

router.post("/", function(req,res){
    res.send("Something else");
});

module.exports = router;
