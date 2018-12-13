var express = require('express');
var path = require('path');

var app = express();
	
app.use(express.static(path.join(__dirname,'www')));

		
var server = app.listen(parseInt(8899),function(){
	console.log('server start on '+ server.address().port+ ' port');
})
	

