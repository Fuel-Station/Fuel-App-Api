const { verifyToken } = require("../utils/verifyToken");

module.exports = function(app){
const UserController = require("../controllers/UserController");

    app.get("/checkauthentication",verifyToken,(_req,res)=>{
        res.send("Hello user,you are loggedin ")
    });

    app.put("/user/:id",UserController.UpdateUser);
    app.delete("/user/:id",UserController.DeleteUser);
    app.get("/user/:id",UserController.UserID);
    app.get("/users",UserController.Users);
    

}