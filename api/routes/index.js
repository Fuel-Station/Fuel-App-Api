var express = require('express');

var router = express.Router();

router.get('/',function(req,res){
    res.send('welcome to API');
});


require('./AuthRoutes')(router);
require('./StationRoutes')(router);
require('./UserRoutes')(router);
require('./VehicleRoutes')(router);



module.exports.router = router;

