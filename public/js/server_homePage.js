//const e = require("express");

function sendData()
{
    console.log("I am using mailer page")
    var mail=$("#subscribe-email").val();
   let data={"mail":mail}
   var xhttp=new XMLHttpRequest();
   xhttp.onreadystatechange=function(){
       if(this.readyState==4 && this.status==200)
       {    console.log(this.responseText)
           if (this.responseText=="true")
           {alert("Congrats you are subscribed")}
           else{
               alert("Something went wrong")
           }

       }
   }
   xhttp.open("POST","/",true);
   xhttp.setRequestHeader('content-type','application/json')
   xhttp.send(JSON.stringify(data))
  
}