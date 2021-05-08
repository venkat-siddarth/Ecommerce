const fs=require("fs")
const http=require("http");
http.createServer(function(req,res)
{
    fs.readFile("F:/e-commerce proj/public/pages/login.html",function(err,data){
       if (err) throw err; 
       res.writeHead(200,{'Content-Type': 'text/html'});
       res.write(data)

   });

}).listen(5000);