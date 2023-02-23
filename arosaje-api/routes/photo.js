const express = require('express');
const router  = express.Router();
const photoController = require('../controllers/photo');


const app = require('express')()
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

router.get('/photo/annonce', photoController.getAllPhotoAnnonce );
router.get('/photo/gardiennage', photoController.getAllPhotoGardiennage );
router.get('/photo/gardiennage/:id', photoController.getPhotoGardiennageId );

router.post('/photo', upload.array(), photoController.createPhoto );

module.exports = router; // export to use in api.js