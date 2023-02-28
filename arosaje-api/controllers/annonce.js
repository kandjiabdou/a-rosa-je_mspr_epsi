const { PrismaClient, Prisma } = require('@prisma/client')
const prisma = new PrismaClient();
const express = require("express");
const app = express()

app.use(express.json())


const getAnnonce = async (req, res, next) => {
    if(isNaN(req.params.id)) return res.json(errorResponse("Veuillez donnez l'id de l'annonce", 400))
    const annonce = await prisma.Annonce.findUnique({
        where: { id_annonce: parseInt(req.params.id) },
        include : {
            user :{
                select:{prenom: true, nom : true, avatar:true},
            },
            conseil : {}
        }
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
const getAllAnnonces = async (req, res, next) => {
    try {
        const annonces = await prisma.Annonce.findMany({
            include : {
                user :{select:{prenom: true, nom : true, avatar:true}},
                photo : {select:{lien: true, date_photo : true}},
                conseil : {select:{message: true, date_conseil : true,
                    user : {select:{prenom: true, nom : true, avatar:true}}}}
            }
        })
        console.log("ok")
        res.status(200).json({
            "count": annonces.length,
            "annonces": annonces
        })
    } catch (error) {
        console.log(error);
        return res.json(errorResponse("Erreur get annonce", 400))
    }
    
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
    console.log("file",req.files)
    try {
        const annonce = await prisma.Annonce.create({
            data: {
                localisation: rBody.localisation,
                description: rBody.description,
                type_gardien: parseInt(rBody.type_gardien),
                latidute: parseFloat(rBody.latidute),
                longitude: parseFloat(rBody.longitude),
                id_user: parseInt(rBody.id_user)
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

const deleteAnnonceIdUserIdAn = async (req, res, next) => {
    const annonce = await prisma.Annonce.findUnique({
        where: { id_annonce: parseInt(req.params.idAnnonce)}
    })
    if(annonce) {
        if( annonce.id_user === parseInt(req.params.idUser)){
            try {
                const deleteAnnonce = await prisma.Annonce.delete({
                    where: {
                        id_annonce: parseInt(req.params.idAnnonce)
                    }
                })
                return res.status(200).json({
                    "status": 200,
                    deleteAnnonce
                })
            } catch (error) {
                console.log(error);
                return res.json(errorResponse("Erreur de suppression d'annonce", 400))
            }
        }
        return res.json(errorResponse("Imposible de supprimer l'annonce", 400))
    }else{
        return res.json(errorResponse("Pas d'annonce trouvé", 400))
    }
};

const createConseil = async (req, res, next) => {
    const rBody = req.body
    const user = await prisma.user.findUnique({where: {id_user: parseInt(rBody.idUser)}})
    if(user.role_user != "botaniste"){
        return res.json(errorResponse("Vous ne pouvez donner des conseils", 400))
    }
    try {
        const annonce = await prisma.Conseil.create({
            data: {
                message: rBody.message,
                idUser: parseInt(rBody.idUser),
                idAnnonce: parseInt(rBody.idAnnonce)
            }
        })
        res.status(201).json({
            success: true,
            annonce
        })

    } catch (error) {
        console.log(error);
        return res.json(errorResponse("Erreur de création de conseil", 400))
    }
}

const errorResponse = (status, message) => {
    return {"status" : status, "message" : message};
};

module.exports = {
    getAllAnnonce,
    getAnnonce,
    getAllAnnonces,
    getALLAnnonceByUser,
    getAllAnnonceByFilter,
    createAnnonce,
    deleteAnnonceIdUserIdAn,
    createConseil
};