const { PrismaClient, Prisma } = require('@prisma/client')
const prisma = new PrismaClient()
const express = require("express");
const app = express()
const md5 = require('md5')

app.use(express.json())
//GET '/user'
const getAllUser = async (req, res, next) => {
    const users = await prisma.User.findMany({
    })
    res.status(200).json({
        "count": users.length,
        "users" : users
    })
};

//POST '/user'
const newUser = async (req, res, next) => {
    const rBody = req.body
    var response = {"status" : 201, "message" : "User is create success"}
    try{
        const user = await prisma.User.create({
            data: {
                prenom : rBody.prenom, nom : rBody.nom, email : rBody.email, mdp : md5(rBody.mdp), telephone : rBody.telephone
            }
        })
        response.user = user;
    }catch(e){
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            if (e.code === 'P2002') {
              console.log('There is a unique constraint violation')
            }
            response.error = e.code
            response.status = 400
            response.message = "There is a unique constraint violation : " + e.meta.target[0]
        }else {
            response.error = "unknow"
            response.e = e
        }
    }
    res.json(response)
};

module.exports = {
    getAllUser, 
    newUser
};