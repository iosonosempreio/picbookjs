/*global require, module */
/*jslint node: true*/
'use strict';

module.exports = function (grunt) {

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    jshint: {
      options: {
        reporter: require('jshint-stylish'),
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib: {
        src: ['picbook.js']
      }
    }
  });

  grunt.registerTask('default', ['jshint']);

};