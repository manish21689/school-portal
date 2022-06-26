var Joi = require('joi');
var mongoose = require('mongoose');
var teacherschema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 1, maxlength: 20 },
    subject: {
        type: String,
        required: true,
        enum: ['Hindi', 'English', 'Math']
    },
    password: { type: String, required: true },
    isactive: { type: Boolean, required: true, default: true }
})

const validatedata = (data) => {
    const vschema = Joi.object({
        name: Joi.string().min(3).max(20).required(),
        subject: Joi.string().required(),
        password: Joi.string().required()
    })
    return vschema.validate(data)
}
Teacher = mongoose.model('Teachers', teacherschema);

module.exports = { Teacher, validatedata };
