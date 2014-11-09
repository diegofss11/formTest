module.exports = function(config){
    config.set({

        basePath : '',

        background: true,

        autoWatch : true,

        colors: true,

        singleRun: false,

        frameworks: ['jasmine'], 

        reporters: ['progress'],

        files : [
          '../bower_components/angular/angular.min.js',
          '../source/js/**/*.js',
          'unit/controllers/*.js'
        ],

        plugins : [
           'karma-jasmine',
           'karma-chrome-launcher',            
           'karma-junit-reporter',
           'karma-phantomjs-launcher'
        ],

        junitReporter : {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};
