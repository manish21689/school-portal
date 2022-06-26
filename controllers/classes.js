var mongoose = require('mongoose')
var vClass = require('../models/model-classes');
const classRepository = require('../repository/rclass')

var addClass = async (req, res) => {

    //    var error = validatedata(req.body);
    //    if (error){ return res.send('form validataion error')};

    const vclass = {
        class: req.body.class,
        section: req.body.section
    }
    const [result, err] = await classRepository.addClass(vclass);

    if (!err) {
        return res.status(200).json(result);

    }
    return res.status(400).json(err);
}

var getClasses = async (req, res) => {
    var { pages, limit } = req.query;
    var [result, err] = await classRepository.getClasses(pages, limit);
    if (!err) {
        res.status(200).json(result);
    } else {
        res.status(400).json(err);
    }

}

var getClassById = async (req, res) => {
    var id = req.params.id
    var [result, err] = await classRepository.getClassById(id)
    if (!err) {
        res.status(200).json(result);
    } else {
        res.status(400).json(err);
    }
}

var updateClassById = async (req, res) => {
    var id = req.params.id
    var [result, err] = await classRepository.updateClassById(id, req.body);
    if (!err) {
        res.status(200).json(result);
    } else {
        res.status(400).json(err);
    }
}

var deleteClassById = async (req, res) => {
    var id = req.params.id
    var [result, err] = await classRepository.deleteClassById(id);
    if (!err) {
        res.status(200).json(result);
    } else {
        res.status(400).json(err);
    }
}


module.exports = { addClass, getClasses, updateClassById, deleteClassById, getClassById }