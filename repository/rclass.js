var vClass = require('../models/model-classes');

const getClasses = async (pages, limit) => {
    try {
        var doc = await vClass.find({ isactive: true }).limit(limit).skip((pages - 1) * limit);
        return [doc, null]

    } catch (error) {
        return [null, error]
    }

}
const getClassById = async (id) => {
    try {
        var doc = await vClass.findById(id)
        return [doc, null]
    } catch (error) {
        return [null, error]
    }
}

const updateClassById = async (id, obj) => {
    try {
        var doc = await vClass.findByIdAndUpdate(id, obj, { new: true })
        return [doc, null]
    } catch (error) {
        return [null, error]
    }
}

const deleteClassById = async (id) => {
    try {
        var doc = await vClass.findByIdAndUpdate(id, { isactive: false }, { new: true })
        return [doc, null]
    } catch (error) {
        return [null, error]
    }

}

const addClass = async (ClassObj) => {
    try {
        const vclass = new vClass({
            class: ClassObj.class,
            section: ClassObj.section
        })
        const doc = await vclass.save();
        return [doc, null]
    } catch (error) {
        console.log(error)
        return [null, error]
    }
}

module.exports = { getClassById, getClasses, updateClassById, deleteClassById, addClass }