const express = require("express")
const router = express.Router()
const { partyregistation,party } = require("../controller/party.controller.js")


router.post("/addparty",partyregistation)


router.post("/vote", party)

module.exports = router

