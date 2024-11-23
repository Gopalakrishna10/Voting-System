const express = require("express")
const { voteResult, votingPercentage } = require("../controller/results.controller")
const router = express.Router()


router.get("/vote",voteResult)

router.get("/votepercent",votingPercentage)

module.exports = router