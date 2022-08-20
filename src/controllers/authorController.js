const AuthorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

// const getAuthorsData= async function (req, res) {
//     let data=req.body
//     let authorId = data.author_id
//     if(!authorId){
//         return res.send({msg: "authorId is mandatory"})
//     }
//     let authors = await AuthorModel.create(data)
//     res.send({data: authors})
// }

module.exports.createAuthor= createAuthor
// module.exports.getAuthorsData= getAuthorsData