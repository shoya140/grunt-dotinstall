module.exports = function(grunt){

  // config
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    less:{
      development:{
          files:{
            // 複数->配列指定
            'build/style.css': ['src/style1.less', 'src/style2.less']
          }
      },
      production:{
        options:{
          // 書く位置でオプションのスコープが決まる
          compress: true
        },
        src: 'src/**/*.less',
        dest: 'build/style.css'
      }
    },

    csslint:{
      check:{
        // 変数指定も可能
        src: '<%= less.production.dest %>'
      }
    },

    cssmin:{
      minimize:{
        options:{
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        files:{
          'build/style.min.css': '<%= less.production.dest %>'
        }
      }
    },

    watch:{
      options:{
        livereload: true
      },
      files: 'src/*.less',
      tasks: ['less:production', 'csslint', 'cssmin']
    },

    connect:{
      server:{
        options:{
          port: 8000,
          // hostnameの指定が可能 デフォルトだとlocalhost
          // hostname: '192.168.2.107'
        }
      }
    }
  });

  // plugin
  grunt.loadNpmTasks('grunt-contrib');

  // task
  grunt.registerTask('default', 'less');
  grunt.registerTask('production', ['less:production', 'csslint', 'cssmin', 'connect', 'watch']);
};
