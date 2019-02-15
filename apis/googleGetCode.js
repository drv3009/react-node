var express = require("express");
var app = express.Router();
var oAuthClient = require("./authenticate").oAuth2Client;
var userdb = require("../models/userModel");
var tokens;
var app = async (req, res) => {
  console.log("........");
  console.log();
  console.log();
  console.log(req.query.code);
  console.log();
  console.log();
  console.log("........");
  if (req.query.code) {
    tokenObj = await oAuthClient.getToken(req.query.code);
    console.log(tokenObj);
    if (tokenObj.tokens.refresh_token) {
    } else {
    }
  }
};

module.exports = app;
