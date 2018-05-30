var express = require('express');
var router = express.Router();

router.use(function(req, res, next){
    console.log('I AM A ROUTER MIDDLEWARE');
    next();
});

router.get('/', function(req, res, next) {
    /*res.json({
        message: 'Hello World'
    });*/
    next(new Error('custom error'));
});

router.get('/a?r', function(req, res) {
    res.send('router a?r');
});

router.get('/params/:name', function(req, res) {
    res.json({
        params: req.params,
        host: req.host,
        header: req.headers
    });
});

router.post('/body', function(req, res) {
    res.json(req.body);
});

router.get('/res', function(req, res) {
    //res.status(201).send('');
    res.render('index', {
        
    });
});

module.exports = router;