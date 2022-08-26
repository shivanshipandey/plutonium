const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )
//helooooooooo
app.use(
    function (req, res, next) {
        console.log("inside GLOBAL MW");
        const moment = require('moment');
        const today = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
        let ipAddress = req.ip;
        let url = req.originalUrl
        console.log (today +" , "+ipAddress+" , "+url);
        next();
    }
);

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
