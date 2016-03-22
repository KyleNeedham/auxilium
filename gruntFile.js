module.exports = (grunt) => {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    tslint: {
      options: {
        configuration: 'tslint.json'
      },
      files: {
        src: ['src/auxilium.ts', 'spec/typescript/auxilium.spec.ts']
      }
    },
    typescript: {
      auxilium: {
        src: 'src/auxilium.ts',
        dest: 'lib',
        options: {
          module: "umd",
          target: "es5"
        }
      }
    },
    jasmine: {
      auxilium: {
        options: {
          specs: 'spec/javascript/auxilium.spec.js',
          template: require('grunt-template-jasmine-requirejs'),
          templateOptions: {
            requireConfig: {
              paths: {
                'fundbay-auxilium': 'lib/auxilium'
              }
            }
          }
        }
      }
    },
    uglify: {
      auxilium: {
        files: {
          'lib/auxilium.js': 'lib/auxilium.js'
        }
      }
    }
  });

  grunt.registerTask('default', [
    'tslint',
    'typescript',
    'uglify',
    'jasmine'
  ]);
  grunt.registerTask('build', 'typescript');
  grunt.registerTask('test', 'jasmine');
};
