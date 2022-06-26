var vclass = require('../controllers/classes');
var loginauth = require('../middleware/loginauth')
//const { isLoggedIn } = require('../middleware/loginauth'); //ok
var express = require('express');
var router = express.Router();
router.get('/',loginauth.isLoggedIn,vclass.getClasses);
router.post('/', vclass.addClass);
router.get('/:id', vclass.getClassById);
router.put('/:id', vclass.updateClassById);
router.delete('/:id', vclass.deleteClassById);
module.exports = router;
