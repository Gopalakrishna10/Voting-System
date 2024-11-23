const mongoose = require("mongoose")

const partySchema= mongoose.Schema({
    bjp :{type :Number},
    cong :{type :Number},
    trs :{type :Number},
    mim :{type :Number},
})

module.exports = mongoose.model("Party",partySchema)