const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");


router.post("/add-emp", async (req, res) => {
    const empDetails = new Employee(req.body)
    try {
        await empDetails.save();
        res.status(201).send(empDetails)
        console.log(empDetails);
    } catch (error) {
        res.status(401)
    }
})

module.exports = router