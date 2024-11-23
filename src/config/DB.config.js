const mongoose = require('mongoose')

mongoose.
connect(`${process.env.MONGODB}/vote`).then(()=>{
    console.log("db Connected");
})


module.exports = mongoose.connection