const {Station} = require('../models/StationModel.js')



//UPDATE
exports.updateStation = async (req,res,next)=>{

    try {
        const updatedStation = await Station.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true})
        return res.status(200).json(updatedStation)
    } catch (err) {
        next(err)
    }
}

//DELETE
exports.deleteStation = async (req,res,next)=>{

    try {
        await Station.findByIdAndDelete(req.params.id)
        return res.status(200).json("Station Deleted")
    } catch (err) {
        next(err)
    }
}

//GET
exports.getStation = async (req,res,next)=>{

    try {
        const station = await Station.findById(req.params.id)
        return res.status(200).json(station)
    } catch (err) {
        next(err)
    }
}

//GET ALL
exports.getStation = async (req,res,next)=>{

    try {
        const stations = await Station.find()
        return res.status(200).json(stations)
    } catch (err) {
        next(err)
    }
}