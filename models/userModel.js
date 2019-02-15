var mongoose = require("mongoose");
var schema = mongoose.Schema;

var user = new schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  googleAuthToken: { type: String },
  chatId: { type: mongoose.Schema.Types.ObjectId }
});

var userModel = mongoose.model("user", user);

module.exports = userModel;
