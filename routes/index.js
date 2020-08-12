const express = require('express'),
    router = express.Router();

router
    .get('/', (req, res) => {
        res.render('index', {title: 'titulo'});
    })
module.exports = router;