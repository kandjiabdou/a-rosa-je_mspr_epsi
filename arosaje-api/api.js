const express = require("express");
const routes = require('./routes/user');
const droutes = require('./routes/default');

const app = express();
app.use(express.json());
app.use('/', routes);
app.use('/', droutes);
const LISTEN_PORT = 8080;
app.listen(LISTEN_PORT,()=> {
    console.log("Server is listening on port " + LISTEN_PORT);
});