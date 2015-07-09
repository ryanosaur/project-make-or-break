var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res, next) {
  fs.readFile('./routes/request.html', 'utf8', function(err, data){
    if(err){
      console.log(err);
      res.status(500).json({ error: 'shit fucked up reading the request file' });
    }
    res.send(data);
  });
});

router.get('/services', function(req, res, next) {
  res.json([{ serviceType: 'web development', cause: 'breast cancer', amount: '$200', description: 'this is where the description will go!' }]);
});

module.exports = router;
