const mongoose = require("mongoose")

const partySchema= mongoose.Schema({
    voterId :{
        type :mongoose.Schema.Types.ObjectId,
        ref :"Vote"
    },
    bjp :{type :Number},
    cong :{type :Number},
    trs :{type :Number},
    mim :{type :Number},
})

module.exports = mongoose.model("Party",partySchema)