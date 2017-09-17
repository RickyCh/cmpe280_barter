function checkForm() {
    
    // get form data
    var username = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var passwd = document.getElementById("passwd").value;
    var passwd2 = document.getElementById("passwdre").value;

    // initial error information
    var err = "<p>";

    // regular expression for username, email and password
    var emailRE = /^[a-z_0-9.-]{1,64}@([a-z0-9-]{1,200}.){1,5}[a-z]{1,6}$/;
    var passwdRE = /^.{4,20}$/;
    var nameRE = /^[a-z_0-9.-]{4,10}$/;

    // error cases check
    if(username === "") {
        err += "Please input your username";
    } else if(email === "") {
        err += "Please input your email";
    } else if(passwd === "") {
        err += "Please input your passwd";
    } else if(!username.match(nameRE)) {
        err += "invalid username, should be 4-10 alphanumeric characters";
    } else if(email.length > 60) {
        err += "Email address is too long";
    } else if(!email.match(emailRE)) {
        err += "Invalid email";
    } else if(!passwd.match(passwdRE)) {
        err += "Password is too long or too short";
    } else if(passwd != passwd2) {
        err += "the re-entered password doesn't match password";
    }

    // output error message
    err += "</p>"
    document.getElementById("error").innerHTML = err;
    
    // check error, if no error submit the form,
    // or stay on the login page
    if(err === "<p></p>") return true;
    else return false;
}