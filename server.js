var express = require("express");
var fetch = require("node-fetch");
var app = express();
var mongoose = require("mongoose");

app.listen(4000, () => {
  console.log("connected");
});

mongoose.connect(
  "mongodb://harit:passw0rd@ds161894.mlab.com:61894/mqtt-test",
  err => {
    if (!err) console.log("db connected");
  }
);
app.use("/api", require("./apis/index"));
