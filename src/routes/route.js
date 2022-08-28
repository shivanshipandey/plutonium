const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const myMid = require("../Middleware/auth")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser, myMid.tokenCreated)

//The userId is sent by front end
router.get("/getUsers/:userId",myMid.tokenVerify, userController.getUserData)

router.put("/updateUsers/:userId", userController.updateUser)

router.put("/deleteUsers/:userId", userController.deleteUser)
module.exports = router;