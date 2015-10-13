var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client();
var client = elasticsearch.Client({hosts: ['localhost:9200']});

module.exports = {
	getSuggest : function(data,callback){
			client.suggest({
	        index: 'conmed',
	        body: {
	            suggest: {
	              text:data,
	                completion:{
	                   field:"name.suggest"
	                }
	            }
	        }
	    }).then(function (resp) {
	      callback(resp);
	        console.log(JSON.stringify(resp));
	    }, function (err) {
	        console.log(err.message);
	    });
	}
}