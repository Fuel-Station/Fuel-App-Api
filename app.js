const express =require("express");
var app = express();
const cors = require('cors');
require("dotenv").config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false);

app.use(cors());

var port = process.env.PORT || 6000;



app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

var v1 = require('./api/routes');

app.use('/api/v1', v1.router);

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    //useCreateIndex:true
   
})
    .then(()=>{
        app.listen(port, () => {
            console.log(`API server is started on: ${port}`);
        });
    })
    .catch((error)=>{
        console.error(error.message);
})
