const mongoose=require('mongoose');

const VehicleSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    fueltype:{
        type:String,
        required:true
    },
    
    
})
const Vehicle =mongoose.model('Vehicle',VehicleSchema);
module.exports = {Vehicle}