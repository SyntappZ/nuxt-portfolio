
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello");
});



const myOAuth2Client = new OAuth2(
   process.env.EMAIL_CLIENT_ID,
   process.env.EMAIL_CLIENT_SECRET
);


myOAuth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN
});

const myAccessToken = myOAuth2Client.getAccessToken();



const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.SERVER_EMAIL, 
    clientId:  process.env.EMAIL_CLIENT_ID,
    clientSecret: process.env.EMAIL_CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
    accessToken: myAccessToken 
  }
});
app.post("/contact_form", (req, res) => {

  const myHtml = `<div>
    <h4>NAME: ${req.body.name}</h4>
    <h4>EMAIL: ${req.body.email}</h4>
    <h4>PHONE NUMBER: ${req.body.phone}</h4>
    <h3>MESSAGE:</h3>
    <p>${req.body.message}</p>
  </div>`;

  const mailOptions = {
    from: req.body.email, 
    to: process.env.RECEIVING_EMAIL, 
    subject: req.body.subject, 
    html: myHtml 
  };
 

  transport.sendMail(mailOptions, (err, result) => {
    if (err) {
      
      res.send({
        message: "ERROR! Email failed to send " + err,
        sent: false
      });
    } else {
      transport.close();
      res.send({
        message: "Email has been sent!",
        sent: true

      });
    }
  });
});

module.exports = {
  path: "/api",
  handler: app
};
