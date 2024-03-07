const { ValidationError } = require("joi");

const errorHandler = (error, req, res, next) => {
  //default error
  let status = 500;
  let data = {
    message: "Internal Server Error!.",
  };

  //Validation error
  if (error instanceof ValidationError) {
    status = 401;
    data.message = error.message;

    return res.status(status).json(data);
  }

  //other errors
  if (error.status) {
    status = error.status;
  }
  if (error.message) {
    data.message = error.message;
  }
  return res.status(status).json(data);
};

module.exports = errorHandler;
