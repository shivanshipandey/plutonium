const express = require('express');
// const userModel = require('../model/userModel');
const router = express.Router();
// const UserModel = require("../models/userModel.js")

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})




router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})


let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },
   ]


   router.post ('/players', function (req,res){
    let newMember = req.body
    let memberName = newMember.name
    let isNameRepeated = false 
//i=0
    for(let i = 0; i< players.length; i++){
        if (players[i].name === memberName){
            isNameRepeated == true;
            break;
        }
    }

    if(isNameRepeated){
        res.send("This player was already added!")
        }else{
            players.push(newMember)
            res.send(players)
        }
    })


    // router.post ("/createUser",async function(req,res){
    //  let data = req.body
    //  let savedData= await UserModel.create(data)
    //  res.send({msg:savedData})

    // })



//ANSWER 2


    // let persons= [
    //     {
    //     name: "ADESH",
    //     age: 20,
    //     votingStatus: false
    //   },
    //   {
    //     name: "ROSHNI",
    //     age: 25,
    //     votingStatus: false
    //   },
    //   {
    //     name: "JYOTI",
    //     age: 23,
    //     votingStatus: false
    // },
    // {
    //   name: "PIYUSH",
    //   age: 25,
    //   votingStatus: false
    // },
    // {
    //     name: "SHIVANSHI",
    //     age: 22,
    //     votingStatus: false
    // },
    // {
    //     name : "GOL.D.ROGER",
    //     age: 80,
    //     votingStatus: false
    // },
    // {
    //   name: "NIKHIL",
    //   age: 40,
    //   votingStatus: false
    // }
    // ]
    
    // router.post('/voters', function(req,res) {
    
    //     let param = req.query;
    //     let age = param.age;
    //     let voterArray = [];
        
    
    //    for(let i =0; i < persons.length ; i++){
    //       if(persons[i].age >= age){
    //            persons[i].votingStatus = true
    //           voterArray.push(persons[i])  
    //       }
    //    }
    
    //   res.send(voterArray)
              
    // })



    let persons= [
        {
        name: "AA",
        age: 20,
        votingStatus: false
      },
      {
        name: "BB",
        age: 30,
        votingStatus: false
      },
      {
        name: "CC",
        age: 28,
        votingStatus: false
      },
      {
        name: "DD",
        age: 32,
        votingStatus: false
      },
      {
          name: "EE",
          age: 22,
          votingStatus: false
      },
      {
          name : "FF",
          age: 45,
          votingStatus: false
      },
      {
        name: "JJ",
        age: 49,
        votingStatus: false
      }
      ]
      
      router.post('/voters', function(req,res) {
      
          let param = req.query;
          let age = param.age;
          let voterArray = [];
          
      
         for(let i =0; i < persons.length ; i++){
            if(persons[i].age >= age){
                 persons[i].votingStatus = true
                voterArray.push(persons[i])  
            }
         }
      
        res.send(voterArray)
                
      })
    

module.exports = router;