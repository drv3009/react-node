var router = require("express").Router();

async function apiredirect(req, res) {
  router.use("/googleauth", require("./googleAuthenticate").callback);
  router.use("/googleGetcode", require("./googleGetCode"));
}

module.exports = apiredirect;
