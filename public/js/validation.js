function validate()
{
    var k=document.getElementById("email").value;
   var pattern = /^\w+@[a-zA-Z]{5,7}\.[a-zA-Z]{3}$/;
    console.log(pattern.test(k))
    if (!(pattern.test(k)))
    {
        document.getElementById("email_error").innerHTML="Email is invalid ";
        document.getElementById("email_error").style.color = "red";
        document.getElementById("email_error").style.position = "relative";
        document.getElementById("email_error").style.textAlign = "center";
}
    else
    {document.getElementById("email_error").innerHTML="";}
    pattern = /^\w{5,}$/;
    k = document.getElementById("paswd").value;
    console.log(pattern.test(k))
    if (!(pattern.test(k))) {
        document.getElementById("pswd_error").innerHTML = "Password is invalid ";
        document.getElementById("pswd_error").style.color = "red";
        document.getElementById("pswd_error").style.position = "relative";
        document.getElementById("pswd_error").style.textAlign = "center";
    }
    else { document.getElementById("pswd_error").innerHTML = ""; }


 

}