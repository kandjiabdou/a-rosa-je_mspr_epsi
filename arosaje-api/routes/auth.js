const express = require('express');
const router  = express.Router();
const authController = require('../controllers/auth');


const app = require('express')()
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

router.post('/login', upload.array(), authController.login );
router.post('/signup', upload.array(), authController.signup );
router.post('/role', upload.array(), authController.role );
router.get('/role', authController.getAllRole );

router.get('/logout', authController.logout );
// router.get('/getme', authController.userProfile );
// router.get('/user/:id', singleUser );

module.exports = router; // export to use in api.js