const express = require("express");
const user = require('./routes/user');
const auth = require('./routes/auth');
const droutes = require('./routes/default');

const app = express();
app.use(express.json());
app.use('/', user);
app.use('/', auth);
app.use('/', droutes);
const LISTEN_PORT = 3000;
app.listen(LISTEN_PORT,()=> {
    console.log("Server is listening on port " + LISTEN_PORT);
});