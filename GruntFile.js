module.exports = function( grunt ) {
	require('time-grunt')(grunt); //shows the execution time for tasks

	grunt.initConfig({
	  	pkg: grunt.file.readJSON('package.json'),

		connect: { //task
			server:{ //target
				options: { //target option
					port: 8001,
					hostname: 'localhost', // Change this to '0.0.0.0' to access the server from outside.
					keepalive: true,
					open: false
				}
			}
		},
		compass: {
			build: {
				options: {
					sassDir: 'source/styles',
					cssDir: 'source/dist/styles/css'
				}
			}
		},
		uglify: {
		    app: {
		    	files: {
		        	'source/dist/js/output.min.js': ['source/dist/js/temp/Annotated.js']
		      	}
		    }
  		},
  		jshint: {
			all: {
				options: {
					jshintrc: '.jshintrc'
				},
				src: [
					'source/js/**/*.js',
				  	'!node_modules/**/*.js'
				]
			}
		},
		open: {
			build: {
				path: 'http://127.0.0.1:8001',
      			app: 'Google Chrome'
			}
		},
		watch: {
			html: {
				files: ['index.html', 'source/partials/*.tpl.html'],
				task: ['default'],
				options: {
					livereload: true
				}
			},
			js: {
				files: 'source/js/**/*.js',
				tasks: ['jshint'],
				options: {
					spawn: true,
					reload: true
				}
       		},
      		sass: {
      			files: ['source/styles/*.scss'],
      			tasks: ['compass']
      		},
      		livereload: {
		       	files: ['public/dist/styles/css/main.css'],
		       	options: {
					livereload: true,
					livereloadOnError: false
				}
		    }
    	},
    	injector: {
			app: {
		      	files: {
		      		'index.html' : [
		        		//JS
		        		'bower_components/angular/angular.js',
		        		'bower_components/angular-bootstrap/ui-bootstrap.js',
		        		'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',

						//APP FILES
		        		'source/js/app.js',
		        		'source/js/**/*.controller.js',
		        		'source/js/**/*.directive.js',
		        		'source/js/**/*.filter.js',

						//CSS
		          		'source/dist/styles/css/main.css'
					]
		        }
		    }
		}
  	});

  	// ===========================================================================
  	// LOAD GRUNT PLUGINS ========================================================
    // ===========================================================================
	grunt.loadNpmTasks('grunt-contrib-compass'); //compile SASS to CSS - must install compass through gem - gem install compass
	grunt.loadNpmTasks('grunt-contrib-connect'); //connect a webservice
	grunt.loadNpmTasks('grunt-contrib-jshint'); //keep JavaScript code consistent
	grunt.loadNpmTasks('grunt-contrib-uglify');	//minimify javascript files
	grunt.loadNpmTasks('grunt-contrib-watch'); //run predefined tasks whenever watched file patterns are added, changed or deleted.
	grunt.loadNpmTasks('grunt-open'); //open urls and files from a grunt task
	grunt.loadNpmTasks('grunt-injector'); //injects css and js in a file


	// ===========================================================================
  	// REGISTER TASKS ============================================================
  	// ===========================================================================
	grunt.registerTask('default', ['compass', 'injector', 'connect:server', 'open:build', 'watch']);
	grunt.registerTask('build', ['compass', 'injector', 'jshint', 'ngAnnotate', 'uglify', 'connect:server', 'open:build', 'watch']);
};

