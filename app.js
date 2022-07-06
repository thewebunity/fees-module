const express = require('express');
const app = express();
require('dotenv').config()
var cors = require('cors')
require('./model/userSchema')
require('./model/PaymentSchema')
require("./database/conn");

const PORT = process.env.PORT || 5000;



app.use(cors())
app.use(express.json());
app.use(require('./auth/checkout'))
app.use(require("./auth/registerapi"));
app.use(require("./auth/deleteapi"));
app.use(require("./auth/getdataapi"));
app.use(require("./auth/updateapi"));





// -------------------------------Deployment
const path = require('path');
const _dirname = path.resolve();

if(process.env.NODE_ENV =="production"){
    app.use(express.static(path.join(_dirname,'client/build')));

     app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build',"index.html"));
     })
}else{

    app.get('/',(req,res)=>{
        res.send("You are on the home page")
       })
}


// -------------------------------Deployment


app.listen(PORT, () => {
    console.log(`Server is listening on the port ${PORT}`);
})