const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});


//ANSWER 1

router.get('/movies', function (req, res){
    let movies = ['Om Shanti Om', 'Train to Busan', '3 Idiots', 'Phir hera Pheri', 'k3G']
    res.send(movies)
    console.log(movies)
})


//ANSWER 2

router.get('/movies/:indexNumber', function(req, res){
    const movieName = ['Om Shanti Om', 'Train to Busan', '3 Idiots', 'Phir hera Pheri', 'k3G']
    let numberIndex = (req.params.indexNumber)
    console.log(numberIndex)

//ANSWER 3

 if(numberIndex < 0 || numberIndex > movieName.length){
    res.send("Please insert valid index")
 }else{
    res.send(movieName[numberIndex])
 }
})


//ANSWER 4

   
router.get('/get-/movie/:idNumber', function(req, res){
    let Movies = [{
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]


    let index=req.params.idNumber;

    // if(index > Movies.length){
    //     return res.send("plz insert valid id")
    // }else{
        res.send(Movies[index])
    // }
       
})


//ANSWER 5

   
router.get('/get-/Films/:indexNumber', function(req, res){
    let films = [{
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]


    let index=req.params.indexNumber;
   if(index > films.length){
        return res.send("No movie exists with this id")
    }else{
        res.send(films[index])
    }
       
})



    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    // let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    // console.log("This is the request "+ JSON.stringify(requestParams))
    // let movies = requestParams.name
    // console.log('The name of the movie is: ', movies )
    
    // res.send('Dummy response')


module.exports = router;