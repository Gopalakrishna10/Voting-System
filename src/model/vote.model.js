
const mongoose = require("mongoose")


const VoteSchema = mongoose.Schema({
    name:{ type: String , required: true, minLength : 5 ,maxLength :15},
    age:{type:Number , required:true,min:18,max:100},
    mobileNumber : {type:String , required:true ,minLength:10,maxLength:10},
    voterID : { type:String },
    votted :{type:Boolean , default:false}
})


module.exports = mongoose.model("Vote",VoteSchema)