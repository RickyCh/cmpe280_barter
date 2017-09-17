
module.exports = function (app) {
    app.get('/', function(req, res) {
    res.sendfile('./views/index.html');
    });

    app.get('/login', function(req, res) {
        res.sendfile('./views/login.html');
    });

    app.get('/signup', function(req, res) {
        res.sendfile('./views/signup.html')
    });

    app.get('/loginForm', function(req, res) {
        var email = req.param('email');
        var passwd = req.param('passwd');

        console.log(email, passwd);

        if(email === "batman@dc.com" && passwd === "brucewayne") {
            res.sendfile('./views/logged.html');
        } else {
            res.sendfile('./views/loginFail.html');
        }
    });

    app.get('/signForm', function(req, res) {
        
        var name = req.param('username');
        var email = req.param('email');
        var passwd = req.param('passwd');
    

        console.log("registed: ", name, email, passwd);

        res.sendfile('./views/signuped.html');
    });
};