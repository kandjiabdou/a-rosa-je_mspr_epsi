const { PrismaClient, Prisma } = require('@prisma/client')
const prisma = new PrismaClient();
const express = require("express");
const app = express()

app.use(express.json())


const getPhoto = async (req, res, next) => {
    if(! req.params.id) return res.json(errorResponse("Veuillez donnez l'id de l'photo", 400))
    const photo = await prisma.PhotoAnnonce.findUnique({
        where: { id_photo: parseInt(req.params.id) }
    })
    if (!photo) {
        return res.json(errorResponse("Aucune photo trouvée", 400))
    }
    return res.status(200).json({
        sucess: true,
        photo
    })
};

const getAllPhotoAnnonce = async (req, res, next) => {
    const photos = await prisma.PhotoAnnonce.findMany({
    })
    res.status(200).json({
        "count": photos.length,
        "photos": photos
    })
};
const getAllPhotoGardiennage = async (req, res, next) => {
    const photos = await prisma.PhotoGardiennage.findMany({
    })
    res.status(200).json({
        "count": photos.length,
        "photos": photos
    })
};

const getPhotoGardiennageId = async (req, res, next) => {
    if(! req.params.id) return res.json(errorResponse("Veuillez donnez l'id de l'photo", 400))
    const photos = await prisma.PhotoGardiennage.findMany({
        where: { idGardiennage: parseInt(req.params.id) }
    })
    if (!photos) {
        return res.json(errorResponse("Aucune photo trouvée", 400))
    }
    return res.status(200).json({
        sucess: true,
        photos
    })
};

const createPhoto = async (req, res, next) => {
    const rBody = req.body
    var data_photo = {
        lien : rBody.lien,
        date_photo : new Date(rBody.date_photo)
    }
    var prismaModel;
    if (rBody.photoAnnonce){
        prismaModel = prisma.PhotoAnnonce;
        data_photo['idAnnonce'] = parseInt(rBody.idAnnonce);
    } else{
        prismaModel = prisma.PhotoGardiennage;
        data_photo['idGardiennage'] = parseInt(rBody.idGardiennage);
    }
    console.log("data",rBody)
    try {
        const photo = await prismaModel.create({
            data: data_photo
        })
        res.status(201).json({
            success: true,
            photo
        })

    } catch (error) {
        console.log(error);
        return res.json(errorResponse("Erreur de création d'photo", 400))
    }
}
const errorResponse = (status, message) => {
    return {"status" : status, "message" : message};
};

module.exports = {
    getAllPhotoAnnonce,
    getAllPhotoGardiennage,
    getPhotoGardiennageId,
    getPhoto,
    createPhoto
};