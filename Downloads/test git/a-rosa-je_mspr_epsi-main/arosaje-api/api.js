const express = require("express");
const user = require('./routes/user');
const auth = require('./routes/auth');
const annonce = require('./routes/annonce');
const gardiennage = require('./routes/gardiennage');
const photo = require('./routes/photo');
const droutes = require('./routes/default');

const app = express();
app.use(express.json());

app.use('/', user);
app.use('/', auth);
app.use('/', annonce);
app.use('/', gardiennage);
app.use('/', photo);
app.use('/', droutes);

const LISTEN_PORT = 3000;

app.listen(LISTEN_PORT,()=> {
    console.log("Server is listening on port " + LISTEN_PORT);
});