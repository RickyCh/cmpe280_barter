function checkForm() {

    // get form data
    var email = document.getElementById("email").value;
    var passwd = document.getElementById("passwd").value;

    // initial error information
    var err = "<p>";

    // regular expression for email and password
    var emailRE = /^[a-z_0-9.-]{1,64}@([a-z0-9-]{1,200}.){1,5}[a-z]{1,6}$/;
    var passwdRE = /^.{4,20}$/;

    // error cases check
    if(email.length > 60) {
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

    // output error message
    err += "</p>"
    document.getElementById("error").innerHTML = err;
    
    // check error, if no error submit the form,
    // or stay on the login page
    if(err === "<p></p>") return true;
    else return false;
}