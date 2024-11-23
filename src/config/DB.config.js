const mongoose = require('mongoose')

mongoose.
connect("mongodb://localhost:27017/vote").then(()=>{
    console.log("db Connected");
})


module.exports = mongoose.connection