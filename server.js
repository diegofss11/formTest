var port = process.env.PORT || 3030,
	express = require('express'),
	app = express();

//setting up server
app.set('port', 3000);
app.use(express.static(__dirname + '/source'));
app.listen(port);

console.log('Listening on port ' + port + " ...");