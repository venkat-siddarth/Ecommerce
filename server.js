const nodemailer=require("nodemailer");
const express=require("express");
const app=express();
const PORT = 8081;
//Middleware
app.use(express.static("public"))
app.use(express.json())
app.get('/',(req,res)=>{
    //res.send("Hello")
    res.sendFile(__dirname+"/public/homePage.html")
});
app.post("/",(req,res)=>{
    let obj=req.body;
   sendMail(obj.mail,res)
});
app.post("/pages/login.html", (req, res) => {
    let obj = req.body;
    (sendMail(obj.mail,res))
});
app.listen(PORT,()=>{
    console.log('Server running on port' + PORT + __dirname)
});
function sendMail(mail,res) {
   var ret;
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
           ret=false;
        }
        else {
            ret=true;    
        }
        res.send(ret);
    });


}