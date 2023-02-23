const express = require('express');
const router  = express.Router();
const gardiennageController = require('../controllers/gardiennage');


const app = require('express')()
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

router.get('/gardiennage', gardiennageController.getAllGardiennage );
router.get('/gardiennage/:id', gardiennageController.getGardiennage );
router.get('/gardiennage/user/:id', gardiennageController.getAllGardiennageByUser );

router.post('/gardiennage', upload.array(), gardiennageController.createGardiennage );

module.exports = router; // export to use in api.js