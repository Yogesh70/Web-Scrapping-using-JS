"use strict";
const nodemailer = require("nodemailer");
// async..await is not allowed in global scope, must use a wrapper
module.exports.sendEmail = async function (html) {
  // settings generate 
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure: true, // true for 465, false for other ports
    auth: {
      user: "achint47a007@gmail.com", // generated ethereal user
      pass: "unvqjofgbssmlmhv" // generated ethereal password
    },
  });
  // send mail with defined transport object
  await transporter.sendMail({
    from: '"Yogesh 👻" <yogesh.rohtak2000@gmail.com>', // sender address
    to: "achint414@gmail.com", // list of receivers
    subject: "Notice",
    html: html, // html body
  });
}