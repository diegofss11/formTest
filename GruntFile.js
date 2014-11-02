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
				files: '**/*.scss',
				tasks: ['compass']
			}
		}

  	});

  	//** LOAD TASKS  
	grunt.loadNpmTasks('grunt-contrib-compass'); //must have install compass through gem - gem install compass
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');	
	grunt.loadNpmTasks('grunt-karma');	


	//** REGISTER TASKS	  
	
	//GRUNT TEST-KARMA
	grunt.registerTask('test-karma',['karma']);	


	//DEFAULT
	grunt.registerTask('default',['compass', 'jshint', 'connect:server']);
};

