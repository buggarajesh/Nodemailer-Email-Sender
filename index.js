require('dotenv').config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.User_Email,
        pass: process.env.Password_Email,
    },
});

const emailTypes = {
    from: process.env.User_Email,
    to: process.env.User_Email,
    subject: "Sending Email from Node.js",
    text: "Hey,\nThis is Rajesh\nI'm testing email sent from Node.js using Nodemailer\nThank you",
};

transporter.sendMail(emailTypes,(error, info) => {
    if(error){
        return console.log('Error occured:',error);
    }
    console.log('email sent successfully:',info.response);
})