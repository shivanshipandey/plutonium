const axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        // console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        // console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        // console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getDistrictById = async function (req, res) {
    try {
        let id = req.query.district_id
        let date = req.query.date
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`
        }
        let result = await axios(options)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        // console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        // console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        // console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body

        // console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        // console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        // console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getWeather = async function (req, res) {
    try {
        let country = req.query.q
        let appId = req.query.appid
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${appId}`
        }
        let result = await axios(options)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        // console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



let getCitiesWithTemp = async function (req, res) {
    try {
        let cities = ["Bangaluru", "Mumbai", "Delhi", "Chennai", "London", "Moscow"]
        let cityObjArray=[]
        for (i=0; i<cities.length; i++){
            let obj={ city:cities[i]}

            
            let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=1362dae990936264cdd25b4ceb4d9f18`)
console.log(result.data.main.temp)
            obj.temp= result.data.main.temp
            cityObjArray.push(obj)
        }
        let sorted = cityObjArray.sort( function(a,b){ return a.temp - b.temp})
        res.status(200).send({status: true, data: sorted})
        }catch(err){
            res.status(500).send({ msg: err.message })
        }
}


let memeQuestion = async function (req, res){
    try {
        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=438680&text0=so, this is my final step for today'\''s assignment&text1=le ERROR...&username=chewie12345&password=meme@123`
        }
        let result = await axios(options)
        res.send({data: result.data})
    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: err.message })
    }
}
module.exports.memeQuestion=memeQuestion
module.exports.getCitiesWithTemp = getCitiesWithTemp
module.exports.getWeather = getWeather
module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getDistrictById = getDistrictById