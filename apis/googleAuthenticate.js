var googleAuth = require("google-auth-library");
var cred = require("../credentials");

var oAuth2Client = new googleAuth.OAuth2Client(
  cred.web.client_id,
  cred.web.client_secret,
  cred.web.redirect_uris[0]
);

var authCallback = async (req, res) => {
  console.log("authenticate route active");

  const authorizeUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: "https://www.googleapis.com/auth/userinfo.profile"
  });
  res.json({
    url: authorizeUrl
  });
};

module.exports = {
  callback: authCallback,
  oAuth2Client: oAuth2Client
};
