var mongoose = require('mongoose')
var Student = require('../models/model-students');
const studentRepository = require('../repository/student')
const teacherRepository = require('../repository/teacher')
const classRepository = require('../repository/rclass')
const bcrypt= require('../helpers/utils')

var addStudent = async (req, res) => {

    //    var error = validatedata(req.body);
    //    if (error){ return res.send('form validataion error')};

    const student = {
        name: req.body.name,
        teacher_id: req.body.teacher_id,
        class_id: req.body.class_id
    }
    var [result, err] = await studentRepository.addStudent(student);

    if (!err) {
        return res.status(200).json(result);

    }
    return res.status(400).json(err);
}

var getStudents = async (req, res) => {
    var { pages, limit } = req.query;
    var [result, err] = await studentRepository.getStudents(pages, limit);
    if (!err) {
        res.status(200).json(result);
    } else {
        res.status(400).json(err);
    }

}

var getStudentById = async (req, res) => {
    var id = req.params.id
    var [result, err] = await studentRepository.getStudentById(id)
    if (!err) {
        res.status(200).json(result);
    } else {
        res.status(400).json(err);
    }
}

var updateStudentById = async (req, res) => {
    var id = req.params.id
    var [result, err] = await studentRepository.updateStudentById(id, req.body);
    if (!err) {
        res.status(200).json(result);
    } else {
        res.status(400).json(err);
    }
}

var deleteStudentById = async (req, res) => {
    var id = req.params.id
    var [result, err] = await studentRepository.deleteStudentById(id);
    if (!err) {
        res.status(200).json(result);
    } else {
        res.status(400).json(err);
    }
}

var getStudentsByTeacherId = async (req, res) => {
    var { pages, limit } = req.query;
    var id = req.params.id;
    var [teacher, err] = await teacherRepository.getTeacherById(id);
    if (err) return res.status(400).json(err);
    var [student, err] = await studentRepository.getStudentsByTeacherId(pages, limit, id);
    if (err) {
        return res.status(400).json(err);
    }
    const result = {
        teacher: {
            name: teacher.name,
            subject: teacher.subject
        },
        stuedent: student
    }
    res.status(200).json(result);
}

var getStudentsByClassId = async (req, res) => {
    var { pages, limit } = req.query;
    var id = req.params.id;
    var [vclass, err] = await classRepository.updateClassById(id)
    if (err) return res.status(400).json(err);
    var [student, err] = await studentRepository.getStudentsByClassId(pages, limit, id);
    if (err) {
        return res.status(400).json(err);
    }
    const result = {
        vclass: {
            class: vclass.class,
            section: vclass.section
        },
        stuedent: student
    }
    res.status(200).json(result);
}


var getStudentsCountTeacherId = async (req, res) => {
    var id = req.params.id
    var [result, err] = await studentRepository.getStudentsCountTeacherId(id)
    if (!err) {
        res.status(200).json(result);
    } else {
        console.log(err);
        res.status(400).json(err);
    }
}

module.exports = { addStudent, getStudents, updateStudentById, deleteStudentById, getStudentById, getStudentsByTeacherId,
                 getStudentsByClassId,getStudentsCountTeacherId }