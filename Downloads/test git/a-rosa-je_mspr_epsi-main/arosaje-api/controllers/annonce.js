const { PrismaClient, Prisma } = require('@prisma/client')
const prisma = new PrismaClient();
const express = require("express");
const app = express()

app.use(express.json())


const getAnnonce = async (req, res, next) => {
    if(isNaN(req.params.id)) return res.json(errorResponse("Veuillez donnez l'id de l'annonce", 400))
    const annonce = await prisma.Annonce.findUnique({
        where: { id_annonce: parseInt(req.params.id) }
    })
    if (!annonce) {
        return res.json(errorResponse("Aucune annonce trouvée", 400))
    }
    return res.status(200).json({
        sucess: true,
        annonce
    })
};

const getAllAnnonce = async (req, res, next) => {
    const annonces = await prisma.Annonce.findMany({
    })
    console.log("ok")
    res.status(200).json({
        "count": annonces.length,
        "annonces": annonces
    })
};

const getAllAnnonceByFilter = async (req, res, next) => {
    const filter = req.query;
    console.log(filter)
    if (filter.type_gardien) filter.type_gardien = parseInt(filter.type_gardien)
    if (filter.id_user) filter.id_user = parseInt(filter.id_user)
    const annonces = await prisma.Annonce.findMany({
        where: filter
    })
    console.log("ok")
    res.status(200).json({
        "count": annonces.length,
        "annonces": annonces
    })
};

const getALLAnnonceByUser = async (req, res, next) => {
    if(! req.params.id) return res.json(errorResponse("Veuillez donnez l'id du user", 400))
    const annonces = await prisma.Annonce.findMany({
        where: { id_user: parseInt(req.params.id) },
        include:{
            photo : {
                where: { idAnnonce: this.id_annonce }
            }
        }
    })
    if (!annonces) {
        return res.json(errorResponse("Aucune annonce trouvée pour cette utlisateur", 400))
    }
    return res.status(200).json({
        "count": annonces.length,
        annonces
    })
};

const createAnnonce = async (req, res, next) => {
    const rBody = req.body
    console.log("data",rBody)
    try {
        const annonce = await prisma.Annonce.create({
            data: {
                localisation: rBody.localisation,
                description: rBody.description,
                type_gardien: parseInt(rBody.type_gardien),
                latidute: parseFloat(rBody.latidute),
                longitude: parseFloat(rBody.longitude),
                id_user: parseInt(rBody.id_user),
                nb_signalement : 0
            }
        })
        res.status(201).json({
            success: true,
            annonce
        })

    } catch (error) {
        console.log(error);
        return res.json(errorResponse("Erreur de création d'annonce", 400))
    }
}
const errorResponse = (status, message) => {
    return {"status" : status, "message" : message};
};

module.exports = {
    getAllAnnonce,
    getAnnonce,
    getALLAnnonceByUser,
    getAllAnnonceByFilter,
    createAnnonce
};