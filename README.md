#Form Test


##Grunt plugins avaialable:

* grunt-contrib-compass - Compile SASS to CSS - must install compass through ruby cml ->  gem install compass
* grunt-contrib-jshint - Helps to detect errors and keep the JavaScript code consistent
* grunt-contrib-ugligy - Minimify JavaScript files
* grunt-contrib-watch - Runn predefined tasks whener watched file patterns are added, changed or deleted
* grunt-open - Opens urls and files from a grunt task
* grunt-inject - Injects references to files into other files - js and css
* time-grunt - Shows the execution time for grunt tasks


##Run locally

You need to install Node.JS and then the development tools.

	```
	npm install -g grunt-cli
	```

	```
	npm install && bower-install
	```

Then you will need to run the Node.JS server

	```
	node server.js
	```

So then you can run the client application

	```
	grunt
	```


##Deployed version

The application is deployed on heroku - (form-test.herokuapp.com)
