const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const express = require("express");

const prisma = new PrismaClient()
const app = express()
app.use(express.json())

const login = async (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    const rBody = req.body
    try{
        if(!rBody.email || !rBody.mdp){
            return res.json(errorResponse("L'e-mail et le mot de sont requis", 400))
        }
        // Verifie l'email de l'ultilisateur
        const user = await prisma.user.findUnique({
            where: {email: rBody.email}
        })
        if(!user){
            return res.json(errorResponse("Vous vous n'etes pas inscrits", 400))
        }
        // verifie si son mot de passe est correct
        const isMatched = await bcrypt.compare(rBody.mdp, user.mdp);
        if (!isMatched){
            return res.json(errorResponse("Mot de passe incorrect", 400))
        }
        genererToken(user, 200, res);
    }catch(e){
        console.log(e)
        return res.json(errorResponse("Connexion impossible, verifie tes identifiants", 400))
    }
};

const signup = async (req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*")
    const rBody = req.body
    const userExist = await prisma.user.findUnique({where: {email: rBody.email}})
    
    if (userExist){
        return res.json(errorResponse("L'email existe deja", 400))
    }

    try {
        mdpHash = await bcrypt.hash(rBody.mdp, 10);
        const user = await prisma.User.create({
            data: {
                prenom : rBody.prenom, nom : rBody.nom, email : rBody.email, mdp : mdpHash, telephone : rBody.telephone, role_user : rBody.role_user
            }
        })
        res.status(201).json({
            success: true,
            user
        })
    } catch (error) {
        console.log(error);
        return res.json(errorResponse("Erreur d'inscription", 400 ))
    }
}

const role = async (req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*")
    const rBody = req.body
    const roleExist = await prisma.Role.findUnique({where: {nom: rBody.nom}})
    
    if (roleExist){
        return res.json(errorResponse("Ce role existe déjà", 400))
    }
    try {
        const role = await prisma.Role.create({
            data: {nom : rBody.nom}
        })
        res.status(201).json({
            success: true,
            role
        })
    } catch (error) {
        console.log(error);
        return res.json(errorResponse("Erreur de création de role", 400 ))
    }
}

const getAllRole = async (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    const roles = await prisma.Role.findMany({
    })
    res.status(200).json({
        "count": roles.length,
        roles
    })
};

const logout = (req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*")
    res.clearCookie('token');
    res.status(200).json({
        success: true,
        message: "Deconnecte avec succes"
    })
}

const genererToken = async (user, statusCode, res) =>{
    const token = await jwt.sign({id: user.id_user}, process.env.JWT_SECRET, {expiresIn: 3600});
    const options = {
        httpOnly: true,
        expires: new Date(Date.now() + 60*60*1000)
    };
    delete user["mdp"]
    return res.status(statusCode).cookie('token', token, options ).json({success: true, token, user})
};
const errorResponse = (status, message) => {
    return {"status" : status, "message" : message};
};


module.exports = {login, signup, logout, role, getAllRole};