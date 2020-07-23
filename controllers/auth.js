const User = require("../models/User");
const CustomError = require("../helpers/error/CustomError");
const asyncErrorWrapper = require("express-async-handler");

const register = asyncErrorWrapper(async (req, res, next) => {
    // POST DATA
    const name = "Turay";
    const email = "cffgdgjd@gmail.com";
    const password = "232";

    const user = await User.create({
        name,
        email,
        password
    });
    res
    .status(200)
    .json({
        success: true,
        data: user
    });    
});

const errorTest = (req, res, next) => {
    return next(new TypeError("Tyoe Error!!!"));
} 

module.exports = {
    register,
    errorTest
};