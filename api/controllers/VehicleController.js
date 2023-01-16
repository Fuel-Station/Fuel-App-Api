const { Vehicle } = require('../models/VehicleModel')

//add vehicle
exports.addVehicle = async(req, res) => {
    let vehicle = Vehicle({
        name: req.body.name,
        fueltype:req.body.fueltype,
    })

    vehicle= await vehicle.save();

    if(!vehicle){
        return res.status(404).send('The vehicle cannot be created!');
    }
    res.send(vehicle);
    

};

//get vehicel
exports.getVehicle = async(req,res)=>{
    const vehicle=await Vehicle.findById(req.params.id);

    if(!vehicle){
        res.status(500).json({success:false});
    }
    res.send(vehicle);
}

//get all vehicels
exports.getVehicles = async(req,res)=>{
    const vehicles = await Vehicle.find();

    if(!vehicles){
        res.status(500).json({success:false});
    }
    res.send(vehicles);
}