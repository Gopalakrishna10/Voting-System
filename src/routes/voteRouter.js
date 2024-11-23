const express = require("express")
const  {createVotter}  = require("../controller/vote.controller.js")
const router =  express.Router()


router.post("/addvoter",createVotter)


module.exports = router