module.exports = function( grunt ) { 
	grunt.initConfig({
	  	pkg: grunt.file.readJSON('package.json'),
		connect: { //task
			server:{ //target
				options: { //target option
					port: 8001, 
					hostname: '127.0.0.1', // Change this to '0.0.0.0' to access the server from outside.
					keepalive: true,
					open: true
				}
			}
		},
		karma: { 
	        unit: { 
	            configFile: 'test/karma.conf.js', 
	            runnerPort: 9876,
	            browsers: [ 'Chrome' ]
	        }
	    },
	    compass: {
			dev: {
				options: {
					sassDir: 'source/sass',
					cssDir: 'source/sass/css'					
				}
			}
		},
		includeSource: {
		    options: {
		    	// Task-specific options go here.
		    },
		    my_target: {
		    	// Target-specific file lists and/or options go here.
			},
		},
		uglify: {
		    my_target: {
		    	files: {
		        	'source/js/output.min.js': ['source/js/**.js']
		      	}
		    }
  		},
  		jshint: {
			all: {
				options: {
					jshintrc: '.jshintrc'
				},
				src: [
					'**/index.js',
				  	'source/js/**/*.js',
				  	'test/**/*.js',
				  	'!node_modules/**/*.js'
				]
			}
		},
		watch: {
			css: {
				files: ['**/*.scss', '**/*.js'],
				tasks: ['compass']
			}
		}

  	});

  	//** LOAD TASKS  
	grunt.loadNpmTasks('grunt-contrib-compass'); //compile SASS to CSS - must have install compass through gem - gem install compass
	grunt.loadNpmTasks('grunt-contrib-connect'); //connect a webservice
	grunt.loadNpmTasks('grunt-contrib-jshint'); //VERIFY JSHINTRC FILE WITH QUESTRADE
	grunt.loadNpmTasks('grunt-contrib-uglify');	//minimify javascript files
	grunt.loadNpmTasks('grunt-contrib-watch'); //run predefined tasks whenever watched file patterns are added, changed or deleted.
	grunt.loadNpmTasks('grunt-include-source'); //include your sources into your HTML files automatically
	grunt.loadNpmTasks('grunt-karma'); //karma test runner	


	//** REGISTER TASKS	  
	
	//GRUNT TEST-KARMA
	grunt.registerTask('test-karma',['karma']);	


	//DEFAULT
	grunt.registerTask('default',['compass', 'jshint', 'connect:server']);
};

