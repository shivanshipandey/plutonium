
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")
const authorModel = require("../models/authorModel")


const createBook= async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find().
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate(['author_id', 'publisher'])
    res.send({data: specificBook})

}

const getData= async function(req, res){
    let requestBody = req.body
    let authorBody = req.body.author_id
    let publisherBody = req.body.publisher

    const authorValidation = await authorModel.find({ _id: authorBody }).select({ _id: 1,})
      const publisherValidation = await publisherModel.find({publisher: publisherBody}).select({ _id: 1 })

      if (authorValidation.length > 0) {
        const newData = await bookModel.create(requestBody)
        res.send(newData)
    } else {
        res.send({ error: "enter valid Author id" })
      }
        if (publisherValidation.length > 0) {
          const dataBook = await bookModel.create(requestBody)
          res.send(dataBook)
        } else {
          res.send({ error: "enter valid Publish id "})
        }
     
    }




const bookUpdate = async function (req, res) {
    const data = await publisherModel.find({ $or:  [{"name" : "Penguin"} , { "name" : "harperCollins" }] })
    const updatedData=await bookModel.updateMany({publisher:data},{"hardCover":true})
    res.send(updatedData);
}

const bookPrice = async function (req,res){
    const authorData = await authorModel.find({rating:{$gt: 3.5}})
    const updatePrice = await bookModel.updateMany({author_id : authorData},{$inc:{price: +10}})
    res.send(updatePrice)
}




module.exports.bookPrice= bookPrice
module.exports.bookUpdate=bookUpdate
module.exports.getData=getData
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
