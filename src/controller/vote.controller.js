
const voteModel = require("../model/vote.model")

module.exports.createVotter = async(req,res)=>{
    try{
        const{name,age,mobileNumber,} = req.body

        const voterID = name.substring(1,3) + mobileNumber.substring(3,7)
        const user = await voteModel.findOne({mobileNumber})
        if(user) return res.status(400).json({
            message:"Mobile Number Already In Use"
        })
        const votter = await voteModel.create({
            name,age,mobileNumber,voterID
        })

        res.send(`user created succesfully and this is your ID : ${voterID}`)
    } catch (error) {
        res.send(error.message);
    }
}