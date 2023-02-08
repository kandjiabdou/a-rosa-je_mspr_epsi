const express = require('express');
const router  = express.Router();
const userController = require('../controllers/user');


const app = require('express')()
const bodyParser = require('body-parser')
const multer = require('multer') // v1.0.5
const upload = multer() // for parsing multipart/form-data

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencode

router.get('/user', userController.getAllUser);
router.post('/user',  upload.array(), userController.newUser);

module.exports = router; // export to use in main.js