var mongoose = require('mongoose');
const Teacher = require('../models/model-teachers');
const {Student} = require('../models/model-students');

const teacherRepository = require('../repository/teacher')
const bcrypt = require('../helpers/utils')

var addTeacher = async (req, res) => {
    let { error } =Teacher.validatedata(req.body)
    console.log(error)
    if (error) {
        return res.status(400).json('Invalid Payload')
    }
    const hashed=bcrypt.encpwd(req.body.password)
    const teacher = {
        name: req.body.name,
        subject: req.body.subject,
        password: hashed
    }
    var [result, err] = await teacherRepository.addTeacher(teacher);

    if (!err) {
        return res.status(200).json(result);

    }
    return res.status(400).json(err);
}

var getTeachers = async (req, res) => {
    var { pages, limit } = req.query;
    var [result, err] = await teacherRepository.getTeachers(pages, limit);
    if (!err) {
        res.status(200).json(result);
    } else {
        res.status(400).json(err);
    }

}

var getTeacherById = async (req, res) => {
    var id = req.params.id
    var [result, err] = await teacherRepository.getTeacherById(id)
    if (err) {
        res.status(400).json(err);
    }
    return res.status(200).json(result);
}

var updateTeacherById = async (req, res) => {
    var id = req.params.id
    var [result, err] = await teacherRepository.updateTeacherById(id, req.body);
    if (!err) {
        res.status(200).json(result);
    } else {
        res.status(400).json(err);
    }
}

var deleteTeacherById = async (req, res) => {
    var id = req.params.id
    var [result, err] = await teacherRepository.deleteTeacherById(id);
    if (!err) {
        res.status(200).json(result);
    } else {
        res.status(400).json(err);
    }
}

const getStudentsCount = async (req,res)=>{
    var vid = req.params.id
    var [result, err] = await teacherRepository.getStudentsCount(vid)
     if (err) {
        //res.status(400).json(err);
        res.send("Error in function s")
    }
    return res.status(200).json(result);

}

var delStudentsByTeacherId  = async (req, res) => {
    var id = req.params.id
    var [result, err] = await teacherRepository.delStudentsByTeacherId (id);
    if (err) {
        console.log(err)
        res.status(400).json(err);
    }
        res.status(200).json(result);
}


// var updateTeacher = async (req, res) => {
//     try {
//         //var doc = await Teacher.findByIdAndUpdate(req.params.id, req.body, { upsert: true });
//         var doc = await Teacher.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         res.json({ msg: 'Data Updated Successfully..', doc: doc })

//     } catch (error) {
//         res.send('unable to update data..')
//     }
// }

// var deleteTeacher = async (req, res) => {
//     try {
//         const id = req.params.id
//         var doc = await Teacher.findByIdAndUpdate(id, { isactive: false });
//         res.json({ msg: 'Data Deleted Successfully..', doc: doc })

//     } catch (error) {
//         res.send('unable to delete data..')
//     }
// }

module.exports = { addTeacher, getTeachers,
     updateTeacherById, deleteTeacherById, getTeacherById,
     getStudentsCount,delStudentsByTeacherId }