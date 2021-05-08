const nodemailer = require("nodemailer");
function sendMail(mail) {
    var transporter = nodemailer.createTransport(
        {
            service: "gmail",
            auth: {
                user: "siddarth55555@gmail.com",
                pass: "fioyrgfddlmijlpz"
            }
        }
    );
    var mailOptions = {
        from: "siddarth55555@gmail.com",
        to: mail,
        subject: "REDSTONE|Welcomes you to our community",
        html: "<h1>Welcome to redstone community</h1><div><h1>Check out new products</h1></div>"
    }
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
        }
        else {
            console.log("Congratulations you are subscribed to Redstone")
        }
    })


}
sendMail()