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
          '../bower_components/angular-mocks/angular-mocks.js',
          '../source/js/**/*.js',
          '../test/unit/**/*.spec.js'
        ],

        plugins : [
           'karma-chrome-launcher',            
           'karma-junit-reporter',
           'karma-phantomjs-launcher',
           'karma-jasmine'
        ],

        junitReporter : {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};
