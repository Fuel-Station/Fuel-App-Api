module.exports = function(app){
   

    const AuthController = require("../controllers/AuthController");
 
    app.post("/register",AuthController.registerUser);
    app.post("/login",AuthController.loginUser);
    
    app.post("/register_station",AuthController.registerStation);
    app.post("/login_station",AuthController.loginStation);
 
 
 
 }