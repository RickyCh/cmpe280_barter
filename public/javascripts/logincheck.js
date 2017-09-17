function checkForm() {
    var email = document.getElementById("email").value;
    var passwd = document.getElementById("passwd").value;

    var err = "<p>";

    var emailRE = /^[a-z_0-9.-]{1,64}@([a-z0-9-]{1,200}.){1,5}[a-z]{1,6}$/;
    var passwdRE = /^.{4,20}$/;

    if(email.length > 30) {
        err += "Email address is too long";
    } else if(email === "") {
         err += "Please input your email";
    } else if(passwd === "") {
        err += "Please input your passwd";
    } else if(!passwd.match(passwdRE)) {
        err += "Password is too long or too short";
    } else if(!email.match(emailRE)) {
        err += "Invalid email";
    }

    err += "</p>"
    document.getElementById("error").innerHTML = err;
    
    if(err === "<p></p>") return true;
    else return false;
}