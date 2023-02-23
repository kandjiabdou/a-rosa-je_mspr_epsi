const { PrismaClient, Prisma } = require('@prisma/client')
const prisma = new PrismaClient();
const express = require("express");
const app = express()

app.use(express.json())

const getGardiennage = async (req, res, next) => {
    if(! req.params.id) return res.json(errorResponse("Veuillez donnez l'id de l'Gardiennage", 400))
    const gardiennage = await prisma.Gardiennage.findUnique({
        where: { id_gardiennage: parseInt(req.params.id) }
    })
    if (!gardiennage) {
        return res.json(errorResponse("Aucune Gardiennage trouvée", 400))
    }
    return res.status(200).json({
        sucess: true,
        Gardiennage
    })
};

const getAllGardiennage = async (req, res, next) => {
    const gardiennages = await prisma.Gardiennage.findMany({
    })
    console.log("ok")
    res.status(200).json({
        "count": gardiennages.length,
        "gardiennages": gardiennages
    })
};

const getAllGardiennageByUser = async (req, res, next) => {
    if(! req.params.id) return res.json(errorResponse("Veuillez donnez l'id de l'photo", 400))
    const gardiennages = await prisma.Gardiennage.findMany({
        where: { id_user: parseInt(req.params.id) }
    })
    if (!gardiennages) {
        return res.json(errorResponse("Aucune gardiennage trouvée", 400))
    }
    // gardiennages.forEach(async gardiennage => {
    //     // console.log(gardiennage["id_gardiennage"]);
    //     await gardiennage["photos"] = await getPhotoIdGardiennage(gardiennage["id_gardiennage"]);
    // });
    return res.status(200).json({
        sucess: true,
        gardiennages
    })
};
const getPhotoIdGardiennage = async (id) => {
    console.log("gardiennage",id);
    if(! id) return res.json(errorResponse("Veuillez donnez l'id de l'photo", 400))
    const photos = await prisma.PhotoGardiennage.findMany({
        where: { idGardiennage: parseInt(id) }
    })
    if (!photos) {
        return errorResponse("Aucune photo trouvée", 400)
    }
    console.log("photo gar",photos)
    return photos
};

const createGardiennage = async (req, res, next) => {
    const rBody = req.body
    console.log("data",rBody)
    try {
        const gardiennage = await prisma.Gardiennage.create({
            data: {
                date_debut : new Date(rBody.date_debut),
                date_fin: new Date(rBody.date_fin),
                description : rBody.description,
                idAnnonce: parseInt(rBody.id_annonce),
                id_user: parseInt(rBody.id_user)
            }
        })
        res.status(201).json({
            success: true,
            gardiennage
        })

    } catch (error) {
        console.log(error);
        return res.json(errorResponse("Erreur de création d'Gardiennage", 400))
    }
}
const errorResponse = (status, message) => {
    return {"status" : status, "message" : message};
};

module.exports = {
    getAllGardiennage,
    getGardiennage,
    createGardiennage,
    getAllGardiennageByUser
};