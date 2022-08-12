const express = require('express');
const router = express.Router();

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


   router.post('/players',function(req,res) {
        
       let myNewPlayer=req.body
       let myNewPlayerName= myNewPlayer.name
       let isNameRepeated=false
   
       for(i=0;i<players.length;i++) {
           if(players[i].name == myNewPlayerName ){
                isNameRepeated = true
                break;
           }
    }
    
       if(isNameRepeated ){
        res.send("MAN!, this player is already there") 


       }else{
        players.push(myNewPlayer)
        res.send(players)
       }

   })




   let arr = [ 23,43,54,65,6,7,87,98,45657,3456,655734,6,988]
   router.post('/post-query2', function(req,res){


    res.send({data: finalarr,status:true })

   })


   
let persons= [
  {
  name: "ADESH",
  age: 20,
  votingStatus: false
},
{
  name: "ROSHNI",
  age: 25,
  votingStatus: false
},
{
  name: "JYOTI",
  age: 23,
  votingStatus: false
},
{
  name: "PIYUSH",
  age: 25,
  votingStatus: false
},
{
    name: "SHIVANSHI",
    age: 22,
    votingStatus: false
},
{
    name : "GOL.D.ROGER",
    age: 80,
    votingStatus: false
},
{
  name: "NIKHIL",
  age: 40,
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