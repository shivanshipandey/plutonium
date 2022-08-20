const publisherModel = require("../models/publisherModel")

const createPublisher= async function (req, res) {
    let book = req.body
    let savedData = await publisherModel.create(book)
    res.send({data: savedData})
}



module.exports.createPublisher= createPublisher