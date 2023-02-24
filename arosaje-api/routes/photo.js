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
router.get('/photo/annonce/:id', photoController.getPhotoAnnonceId );
router.get('/photo/gardiennage', photoController.getAllPhotoGardiennage );
router.get('/photo/gardiennage/:id', photoController.getPhotoGardiennageId );

router.post('/photo/annonce', upload.array(), photoController.createPhotoAnnonce );
router.post('/photo/gardiennage', upload.array(), photoController.createPhotoGardiennage );

module.exports = router; // export to use in api.js