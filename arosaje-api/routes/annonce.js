const express = require('express');
const router  = express.Router();
const annonceController = require('../controllers/annonce');


const app = require('express')()
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

router.get('/annonce', annonceController.getAllAnnonce );
router.get('/annonces', annonceController.getAllAnnonces );
router.get('/annonce/:id', annonceController.getAnnonce );
router.get('/annonce/user/:id', annonceController.getALLAnnonceByUser );
router.get('/filter/annonce', annonceController.getAllAnnonceByFilter );

router.post('/annonce', upload.array(), annonceController.createAnnonce );
router.post('/connseil/annonce', upload.array(), annonceController.createConseil );

router.delete('/annonce/:idUser/:idAnnonce', annonceController.deleteAnnonceIdUserIdAn );

module.exports = router; // export to use in api.js