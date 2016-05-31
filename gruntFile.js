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
    ts: {
      auxilium: {
        rootDir: "src",
        outDir: "lib",
        module: "umd",
        target: "es5",
        declaration: true,
        removeComments: false
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
          'lib/auxilium.js': 'lib/auxilium.js',
          'spec/javascript/auxilium.spec.js': 'spec/javascript/auxilium.spec.js'
        }
      }
    }
  });

  grunt.registerTask('default', [
    'tslint',
    'ts',
    'uglify',
    'jasmine'
  ]);
  grunt.registerTask('build', 'ts');
  grunt.registerTask('test', 'jasmine');
};
