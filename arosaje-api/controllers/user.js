const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');
const express = require("express");
const app = express()

app.use(express.json())


const singleUser = async (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    const user = await prisma.user.findUnique({
        where: { id_user: parseInt(req.params.id) }
    })
    if (!user) {
        return res.json(errorResponse("Vous vous n'etes pas inscrits", 400))
    }
    return res.status(200).json({
        sucess: true,
        user
    })
};

const getAllUser = async (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    const users = await prisma.User.findMany({
    })
    console.log("ok")
    res.status(200).json({
        "count": users.length,
        "users": users
    })
};

const udateMdp = async (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    const rBody = req.body
    const user = await prisma.user.findUnique({ where: { id_user: parseInt(rBody.idUser) } })

    if (!user) {
        return res.json(errorResponse("L'tilisateur n'existe deja pas", 400))
    }
    let isMatched = await bcrypt.compare(rBody.mdp, user.mdp);
    if (!isMatched) {
        return res.json(errorResponse("Mot de passe incorrect", 400))
    }
    // verifie si son mot de passe est correct
    if (rBody.newMdp != rBody.confirmMdp) {
        return res.json(errorResponse("Les deux mots passes ne coresspondent pas", 400))
    }

    isMatched = await bcrypt.compare(rBody.newMdp, user.mdp);
    if (isMatched) {
        return res.json(errorResponse("Le nouveau mot de passe doit être différent de l'ancien", 400))
    }

    try {
        mdpHash = await bcrypt.hash(rBody.newMdp, 10);
        const updateMdp = await prisma.user.update({
            where: {id_user: parseInt(rBody.idUser)},
            data: {mdp: mdpHash}
        })
        res.status(200).json({
            success: true,
            updateMdp
        })
    } catch (error) {
        console.log(error);
        return res.json(errorResponse("Erreur d'inscription", 400))
    }
}
const errorResponse = (status, message) => {
    return { "status": status, "message": message };
};

module.exports = {
    getAllUser,
    singleUser,
    udateMdp
};