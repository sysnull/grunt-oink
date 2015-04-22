module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    jade: {
      compile: {
        options: {
          pretty: true
        },
        files: [{
          expand: true,
          cwd: './views/',
          dest: './views/compiled/',
          src: ['*.jade'],
          ext: '.html',
          extDot: 'last'
        }]
      }
    },
    stylus: {
      compile: {
        options: {
          compress: false
        },
        files: [{
          expand: true,
          cwd: './css/',
          dest: './css/compiled/',
          src: ['*.styl'],
          ext: '.css',
          extDot: 'last'
        }]
      }
    },
    watch: {
      jade_templates: {
        files: ['./views/*.jade'],
        tasks: ['jade']
      },
      stylus_sheets: {
        files: ['./css/*.styl'],
        tasks: ['stylus']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-stylus');

  // Default task.
  grunt.registerTask('default', ['watch']);
};
