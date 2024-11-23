const voteModel = require("../model/vote.model")
const partyModel = require("../model/party.model.js")
const mongoose = require("mongoose")


module.exports.party = async(req,res)=>{
    
    try {
        let { voterID,bjp,cong,trs,mim} = req.body
        
        const valid =  await voteModel.findOne({voterID})
        
        if(valid) {
            if(valid.votted == false){
                const updateuser = await voteModel.findOneAndUpdate(
                    {voterID:voterID},
                    {votted:true},
                    )

                    const upadateVote = await partyModel.updateMany(
                        {},
                        { // Filter condition
                        $inc: { bjp,cong,trs,mim }
                        },
                        
                    )

                    if(updateuser){
                        valid.votted = true
                        await updateuser.save
                    }
                    if(upadateVote){
                        await upadateVote.save
                    }
                    res.send("Votted Succesfully")
            }
            else{
                res.send(" Alreday Votted")
            }
        }
        else if(!valid) return res.this.state(404).json({
            message:"Not A Valid Votter"
        })
        

    } catch (error) {
        res.send("Not VoterId Used ")
    }
}


module.exports.partyregistation = async(req,res)=>{

    try {
        const {bjp,cong,trs,mim}  = req.body

        const create= await partyModel.create({
            bjp,cong,trs,mim
        })
        res.send("created partys")

    } catch (error) {
        res.send(error.message);
    }
}