var express = require('express');
var router = express.Router();
var suggest = require('../controller/autocomplete');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index-food.html', { title: 'Express' });
});

router.post('/getsuggest', function(req, res, next) {
	suggest.getSuggest( req.body.name, function(resp){
		res.send(resp.suggest[0].options);
	})
});

module.exports = router;
