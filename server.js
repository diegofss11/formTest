var port = process.env.PORT || 3030,
	express = require('express'),
	app = express();

//setting up server
app.set('port', port);
app.use(express.static(__dirname + '/')); //root on /
app.listen(port);

console.log('Listening on port ' + port + " ...");