const partyModel = require("../model/party.model")
const voteModel = require("../model/vote.model")

module.exports.voteResult = async (req, res) => {

    try {
        await partyModel.findOne() // Adjust query/filter as needed
            .then(doc => {
                if (doc) {
                    // Convert fields to a key-value pair object
                    const fields = { bjp: doc.bjp, cong: doc.cong, trs: doc.trs, mim: doc.mim };

                    // Find the key with the maximum value
                    const maxKey = Object.keys(fields).reduce((max, key) =>
                        fields[key] > fields[max] ? key : max
                    );
                    res.send(`${maxKey} Won with ${fields[maxKey]} votes `)
                }
            })
            .catch(err => console.error(err));



    }
    catch (error) {

    }
}

module.exports.votingPercentage = async (req, res) => {
    try {
        const totalDocs = await voteModel.countDocuments(); // Total number of documents
        const vottedTrueCount = await voteModel.countDocuments({ votted: true }); // Count of `votted: true`

        if (totalDocs === 0) {
            res.status(400).json({
                message:"No documents in the collection."
            })
            return;
        }

        const percentage = (vottedTrueCount / totalDocs) * 100;
        res.send(`Percentage of votted: true: ${percentage.toFixed(2)}%`);
    } catch (err) {
        res.send("Error calculating percentage:", err);
    }
}