const express = require('express');
const router  = express.Router();
const userController = require('../controllers/user');


const app = require('express')()
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer()

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencode
 
router.get('/user', userController.getAllUser);
router.get('/user/:id', userController.singleUser );
router.put('/userupdate', upload.array(), userController.udateUser );
router.put('/user', upload.array(), userController.udateMdp );

module.exports = router; // export to use in main.js