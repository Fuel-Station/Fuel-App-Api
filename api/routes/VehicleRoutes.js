module.exports = function(app){
const VehicleController = require("../controllers/VehicleController");

app.post("/vehicle",VehicleController.addVehicle);
app.get("/vehicle/:id",VehicleController.getVehicle);
app.get("/vehicles",VehicleController.getVehicles);
    

}