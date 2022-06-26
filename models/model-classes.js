var joi = require('joi');
var mongoose = require('mongoose');
var classschema = new mongoose.Schema({
    class: { type: Number, required: true },
    section: {
        type: String,
        required: true,
        enum: ['A', 'B']
    },
    isactive:{
    type:Boolean,
    required:true,   
    default:true 
    }
})

/* const validatedata = (data) => {
    const schema = {
        class: joi.number().required(),
        section: joi.string().required(),
        isactive: joi.boolean().required(),
    }
    return joi.validate(data, schema)
} */


Classes = mongoose.model('Classes', classschema);
module.exports = Classes;
//module.exports = validatedata;