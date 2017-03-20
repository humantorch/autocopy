/*global module:false*/
module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        spreadsheet_to_json: {
            options: {
                // Task-specific options go here. 
            },
            your_target: {
                // Target-specific file lists and/or options go here. 
            },
        },
    });

  // Default task.
  grunt.registerTask('autocopy', ['spreadsheet_to_json']);

};