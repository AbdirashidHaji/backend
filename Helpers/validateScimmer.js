const joi = require('joi');

const authSchema = joi .object({
    email: joi.string().email().lowercase().required(),
    password:joi.string().min(6).required(),
})

const vendorValidate = joi.object({
    firstname: joi.string().required(), 
    lastname: joi.string().required() ,
    phonenumber: joi.number().number().require(),
    email: joi.string().email().required(),
    address: joi.string,
})