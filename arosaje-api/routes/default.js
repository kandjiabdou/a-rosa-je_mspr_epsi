const express = require('express');
const router  = express.Router();
router.get('*', function(req, res){
    res.json({
        "error" : "404",
        "message":"The route '"+req.url+"' doesn't exist",
    })
});

module.exports = router; // export to use in main.js