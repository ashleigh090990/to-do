module.exports = function(config) {
  var configuration = {

    basePath: '../',

    frameworks: ['jasmine'],

    files: [
    'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'js/**/*.js',
      'test/**/*.spec.js'
    ],

    exclude: [
    ],
    preprocessors: {
      'js/**/*.js': ['coverage']
    },
    reporters: ['progress', 'coverage', 'coveralls'],

    coverageReporter: {
      type : 'lcov',
      dir : 'coverage/',
      includeAllSources: true
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],

    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    singleRun: true
  };

  if(process.env.TRAVIS){
    configuration.browsers = ['Chrome_travis_ci'];
  }

  config.set(configuration);
};
