const express = require('express')
const route = require('./route/route.js')
const app = express()
const mongoose = require('mongoose')
app.use(express.json())


mongoose.connect("mongodb+srv://Shivanshi:zCsGYxnp3CGNrB4b@cluster0.97ded1q.mongodb.net/Shivanshi0001=DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))


app.use( route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});