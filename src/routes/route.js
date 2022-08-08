const express = require('express');
const mylodash = require('lodash')
const abc = require('../introduction/intro')
const First = require('../logger/logger');
const Second = require('../util/helper')
const third = require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
    First.Welcome()
    Second.printDate()
    third.Case()
    let months = ["January", "February", "March", "April","May","June","July","August","September","October","November","December"]
    console.log(mylodash.chunk(months,3))
    let odd = [1,3,5,7,9,11,13,15,17,19]
    console.log(mylodash.tail(odd))
    let arr1 = ["hii"]
    let arr2 = ["hello"]
    let arr3 = ["hey"]
    let arr4 = ["hlw"]
    let arr5 = ["whatsupp"]
    console.log(mylodash.union(arr1,arr2,arr3,arr4,arr5))
    let arr = [["horror","The Shining"],["drama","titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    console.log(mylodash.fromPairs(arr))
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason