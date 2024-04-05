const express = require("express");
const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    dept: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("Employee", employeeSchema)