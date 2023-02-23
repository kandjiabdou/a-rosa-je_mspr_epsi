const { PrismaClient, Prisma } = require('@prisma/client')
const prisma = new PrismaClient();
const express = require("express");
const app = express()

app.use(express.json())


const singleUser = async (req, res, next) => {
    const user = await prisma.user.findUnique({
        where: {id_user: parseInt(req.params.id)}
    })
    if(!user){
        return res.json(errorResponse("Vous vous n'etes pas inscrits", 400))
    }
    return res.status(200).json({
        sucess: true,
        user
    })
};

const getAllUser = async (req, res, next) => {
    const users = await prisma.User.findMany({
    })
    console.log("ok")
    res.status(200).json({
        "count": users.length,
        "users" : users
    })
};
const errorResponse = (status, message) => {
    return {"status" : status, "message" : message};
};

module.exports = {
    getAllUser, 
    singleUser
};