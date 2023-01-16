const { verifyToken2 } = require("../utils/verifyToken");


module.exports = function(app){

const express = require('express')
const StationController= require('../controllers/StationController.js')

app.get("/checkauthentication",verifyToken2,(_req,res)=>{
    res.send("Hello Station,you are loggedin ")
});


//UPDATE
app.put('/station/:id', StationController.updateStation)
//DELETE
app.delete('/station/:id', StationController.deleteStation)
//GET
app.get('/station/:id', StationController.getStation)
//GET ALL
app.get('/stations', StationController.getStation)

}