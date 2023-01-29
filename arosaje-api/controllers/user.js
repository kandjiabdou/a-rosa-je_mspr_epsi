const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const express = require("express");
const app = express()
app.use(express.json())
// const db = require("../models/db.js")
const md5 = require('md5')

//GET '/user'
const getAllUser = async (req, res, next) => {
    const users = await prisma.User.findMany({
        where: { published: true },
        include: { author: true },
      })
      res.json(users)
};

//POST '/user'
const newUser = async (req, res, next) => {
    const rBody = req.body
    const user = await prisma.User.create({
        data: {
            prenom : rBody.prenom, nom : rBody.nom, email : rBody.email, mdp : md5(rBody.mdp), telephone : rBody.telephone
        }
    })

    res.status(201).json({
        "id": this.lastID,
        "user" : user
    })
};

//GET '/user'
// const getAllUser = (req, res, next) => {
//     var sql = "select * from User"
//     var params = []
//     db.all(sql, params, (err, rows) => {
//         if (err) {
//           res.status(400).json({"error":err.message});
//           return;
//         }
//         res.json({
//             "message":"success",
//             "users":rows
//         })
//       });
// };

//POST '/user'
// const newUser = (req, res, next) => {
//     const requestBody = req.body;
//     console.log("body "+requestBody);
//     db.run('INSERT INTO User (prenom, nom, email, mdp, telephone) VALUES (?,?,?,?,?)',
//         [requestBody.prenom, requestBody.nom,requestBody.email, md5(requestBody.mdp),requestBody.telephone],
//         function (err, result) {
//             if (err) {
//                 res.status(400).json({ "error": err.message })
//                 return;
//             }
//             res.status(201).json({
//                 "id": this.lastID
//             })
//         }
//     );
// };

//export controller functions
module.exports = {
    getAllUser, 
    newUser
};