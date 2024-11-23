require('dotenv').config()
const express = require("express")
const app = express()
const db = require("../src/config/DB.config")
const cookieparser = require("cookie-parser")


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieparser())


app.get("/",(req,res)=>{
    res.send("working")
})


const voterRouter = require("./routes/voteRouter")
const partyRouter = require("./routes/partyRouter")
const resultRouter  = require("./routes/resultRouter")


app.use("/vote",voterRouter)
app.use("/party",partyRouter)
app.use("/result",resultRouter)


app.listen(process.env.PORT || 3000)