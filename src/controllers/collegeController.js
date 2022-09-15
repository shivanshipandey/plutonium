const collegeModel = require("../models/collegeModel");
const internModel = require("../models/internModel");

const createColleges = async function (req, res) {
    try {
        const logoRegex = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/

        let data = req.body;
        let { name, fullName, logoLink } = data;

        let dataBody = Object.keys(data)
        if (dataBody.length == 0) {
            return res.status(400).send({ status: false, message: "please enter Data" });
        }
        if (!name) {
            return res.status(400).send({ status: false, message: "name is required" });
        }
        let nameAlreadyExist = await collegeModel.findOne({ name: name });
        if (nameAlreadyExist) {
            return res.status(400).send({ status: false, message: "name already exist" });
        }
        if (!fullName) {
            return res.status(400).send({ status: false, message: "fullName is required" });
        }
        if (!logoLink) {
            return res.status(400).send({ status: false, message: "logoLink is required" });
        }
        if (!logoLink.match(logoRegex)) {
            return res.status(400).send({ status: false, msg: 'invalid format of logoLink' })
        }

        if (dataBody.length > 4) {
            return res.status(400).send({ status: false, mssg: "Only name, fullName, logoLink, and idDeleted are allowed in the request body" })
        }

        if (name.includes(" ")) {
            return res.status(400).send({ status: false, msg: "Space is not allowed" })
        }

        let college = await collegeModel.create(data);
        let collegeData = {name: college.name, fullName: college.fullName, logoLink: college.logoLink, isDeleted: college.isDeleted}
        return res.status(201).send({ status: true, data: collegeData });

    } catch (error) {
        return res.status(500).send({ status: false, Error: error.message });
    }
};
//----------------------------------------------------------------------------------------------------------------------------------------//
const getInternsFromColleges = async function (req, res) {
    try {
        let collegeName = req.query.collegeName;
        if (!collegeName) {
            return res.status(400).send({ status: false, message: "Query is required, (only 'collegeName' is allowed)" })
        }
        if (Object.keys(req.query).length > 1) {
            return res.status(400).send({ status: false, message: "enter single query." })
        }

        const isLowerCase = (value) => {
            if (!(value === value.toLowerCase())) {
                return false
            }
            return true
        }
        if (!isLowerCase(collegeName)) {
            return res.status(400).send({ status: false, message: 'please use the lowercase in query' })
        }

        let isValid = await collegeModel.findOne({ name: collegeName });
        if (!isValid) {
            return res.status(404).send({
                status: false,
                message:
                    "No Colleges with this given query. please give a valid college Name",
            });
        }
        const clg = await collegeModel.findOne({ name: collegeName })
        const { name, fullName, logoLink } = clg
        const intern = await internModel.find({ collegeId: clg._id }).select({ name: 1, email: 1, mobile: 1 })

        const data = {
            name: name,
            fullName: fullName,
            logoLink: logoLink,
            interns: intern.length ? intern : { message: "0 application from this college." }
        }
        return res.status(200).send({ status: true, data: data })

    } catch (err) {
        return res.status(500).send({ status: false, Error: err.message });
    }
};
module.exports = { createColleges, getInternsFromColleges };
