const {Student} = require('../models/model-students');

const getStudents = async (pages, limit) => {
    try {
        var doc = await Student.find({ isactive: true }).limit(limit).skip((pages - 1) * limit);
        return [doc, null]

    } catch (error) {
        return [null, error]
    }
}

const getStudentById = async (id) => {
    try {
        var doc = await Student.findById(id)
        return [doc, null]
    } catch (error) {
        return [null, error]
    }
}

const updateStudentById = async (id, obj) => {
    try {
        var doc = await Student.findByIdAndUpdate(id, obj, { new: true })
        return [doc, null]
    } catch (error) {
        return [null, error]
    }
}

const deleteStudentById = async (id) => {
    try {
        var doc = await Student.findByIdAndUpdate(id, { isactive: false }, { new: true })
        return [doc, null]
    } catch (error) {
        return [null, error]
    }

}

const addStudent = async (studentObj) => {
    try {
        const student = new Student({
            name: studentObj.name,
            teacher_id: studentObj.teacher_id,
            class_id: studentObj.class_id
        })
        const doc = await student.save();
        return [doc, null]
    } catch (error) {
        console.log(error)
        return [null, error]
    }
}

const getStudentsByTeacherId = async (pages, limit, id) => {
    try {
        var doc = await Student.find({ isactive: true, teacher_id: id }, { teacher_id: 0 }).limit(limit).skip((pages - 1) * limit);
        return [doc, null]

    } catch (error) {
        return [null, error]
    }
}

const getStudentsByClassId = async (pages, limit, id) => {
    try {
       // var doc = await Student.find({ isactive: true, class_id: id }, { class_id: 0 }).limit(limit).skip((pages - 1) * limit);
       var doc = await Student.find({ isactive: true, class_id: id }).limit(limit).skip((pages - 1) * limit);
        return [doc, null]

    } catch (error) {
        return [null, error]
    }
}

const getStudentsCountTeacherId = async (id) => {
    try {
        var doc = await Student.find({ teacher_id: id }).countDocuments();
        return [doc, null]

    } catch (error) {
        return [null, error]
    }
}

module.exports = {
    getStudentById, getStudents, updateStudentById,
    deleteStudentById, addStudent, getStudentsByTeacherId,
    getStudentsByClassId,getStudentsCountTeacherId
}