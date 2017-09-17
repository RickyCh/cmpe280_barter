function checkForm() {
    var name = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var passwd = document.getElementById("passwd").value;
    var passwd2 = document.getElementById("passwdre").value;

    var err = "<p>";

    var emailRE = /^[a-z_0-9.-]{1,64}@([a-z0-9-]{1,200}.){1,5}[a-z]{1,6}$/;
    var nameRE = /^[a-zA-Z0-9_]{4,10}$/;
    var passwdRE = /^.{4,20}$/;

    if(name === "") {
        err += "Please input your username";
    } else if(!name.match(nameRE)) {
        err += "invalid username";
    } else if(email.length > 30) {
        err += "Email address is too long";
    } else if(email === "") {
         err += "Please input your email";
    } else if(passwd === "") {
        err += "Please input your passwd";
    } else if(!passwd.match(passwdRE)) {
        err += "Password is too long or too short";
    } else if(!email.match(emailRE)) {
        err += "Invalid email";
    } else if(!(passwd === passwd2)) {
        err += "Re-entered Password does not match password"
    }

    err += "</p>"
    document.getElementById("error").innerHTML = err;

    if(err === "<p></p>") return true;
    else return false;
}