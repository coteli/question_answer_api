const CustomError = require("../../helpers/error/CustomError");
const customErrorHandler = (err, req, res, next) =>{
    let customError = err;
    
    if (err.name === "Syntex Error"){
        customError = new CustomError("Unexpected Syntex", 400);
    }
    if (err.name === "ValidationError"){
        customError = new CustomError(err.message, 400);
    }
    res
    .status(customError.status || 500)
    .json({
        success: false,
        message: customError.message
    });
}

module.exports = customErrorHandler;