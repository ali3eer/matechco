const Joi = require("joi");
const mongodbIdPattern = /^[0-9a-fA-F]{24}$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,25}$/;
class validationSchema {
  //image validation
  static createImageSchema = Joi.object({
    // file: Yup.mixed().required("File is required"),
  });

  //user registration schema
  static userRegisterSchema = Joi.object({
    username: Joi.string().min(5).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    confirmPassword: Joi.ref("password"),
  });

  //user update schema
  static userUpdateSchema = Joi.object({
    username: Joi.string().min(5).max(30),
    email: Joi.string().email(),
    password: Joi.string().min(8),
    confirmPassword: Joi.ref("password"),
  });

  //user login schema
  static userLoginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8),
  });

  //id schema
  static getByIdSchema = Joi.object({
    id: Joi.string().regex(mongodbIdPattern).required(),
  });
}

module.exports = validationSchema;
