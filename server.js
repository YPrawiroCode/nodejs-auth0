// load the things we need
var express = require("express");
var app = express();
let indexRouter = require("./routes/index.js");
const { auth } = require("express-openid-connect");

require("dotenv").config();

// set the view engine to ejs
app.set("view engine", "ejs");

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: "asdfghjkl1234567890zxcvbnm",
  baseURL: "http://localhost:3000",
  clientID: "iHpeJSRNOWFPG6Zz5n4EUFkRm7UlyxjY",
  issuerBaseURL: "https://dev-6fzhm5u9.us.auth0.com",
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

app.use("/", indexRouter);

// use res.render to load up an ejs view file

// index page
// app.get("/", function (req, res) {
//   var mascots = [
//     { name: "Sammy", organization: "DigitalOcean", birth_year: 2012 },
//     { name: "Tux", organization: "Linux", birth_year: 1996 },
//     { name: "Moby Dock", organization: "Docker", birth_year: 2013 },
//   ];
//   var tagline =
//     "No programming concept is complete without a cute animal mascot.";

//   res.render("pages/index", {
//     mascots: mascots,
//     tagline: tagline,
//   });
// });

// about page
app.get("/about", function (req, res) {
  res.render("pages/about");
});

app.listen(3000);
console.log("3000 is the magic port");
