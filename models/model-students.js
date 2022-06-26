const Joi = require("joi");
var joi = require("joi");
var mongoose = require("mongoose");
var studentschema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 1, maxlength: 20 },
  teacher_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  class_id: { type: mongoose.Schema.Types.ObjectId, requied: true },
  isactive: {
    type: Boolean,
    required: true,
    default: true,
  },
});
const validatedata = (data) => {
  const vschema = Joi.object({
    name: Joi.string().required(),
    teacher_id: Joi.ObjectId().requied(),
    class_id: Joi.ObjectId().requied()
  });
  return vschema.validate(data);
};
Student = mongoose.model("Students", studentschema);
module.exports = {Student,validatedata};
//module.exports = validatedata;
