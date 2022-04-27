var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/hello', function(req, res, next) {
  res.json({ msg: 'Hello' });   //cnc edu
  //res.render('index', { title: 'Express' });
});

module.exports = router;
