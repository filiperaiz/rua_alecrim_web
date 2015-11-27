module.exports = function(grunt) {

    // Configuração
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        uglify: {
            options: {
                mangle: false
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'assets/dev/js',
                    src: '**/*.js',
                    dest: 'assets/dist/js/',
                    ext: '.min.js'
                }]
            },

            dev: {
                options: {
                    beautify: true
                },

                files: [{
                    expand: true,
                    cwd: 'assets/dev/js',
                    src: '**/script.js',
                    dest: 'assets/dist/js/',
                    ext: '.min.js'
                }]
            }
        },

        // sass: {
        //    dev: {
        //      files: {
        //        'assets/dev/css/app.css': 'assets/dev/sass/app.scss',
        //      }
        //    }
        //  },

        cssmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'assets/dev/css/',
                    src: ['*.css'],
                    dest: 'assets/dist/css/',
                    ext: '.min.css'
                }]
            },

            dev: {
                files: [{
                    expand: true,
                    cwd: 'assets/dev/css/',
                    src: ['app.css'],
                    dest: 'assets/dist/css/',
                    ext: '.min.css'
                }]
            }
        },


        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 3
                },
                files: [{
                    expand: true,
                    cwd: 'assets/dev/img/',
                    src: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif'],
                    dest: 'assets/dist/img/'
                }],
            }
        },


        watch: {
            dev: {
                files: [
                    'assets/**/*.{css,js,scss}',
                    'Gruntfile.js'
                ],
                tasks: ['uglify:dev', 'cssmin:dev']
            }
        }

    });

    // Plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // Dev
    grunt.registerTask('dev', ['uglify:dev','cssmin:dev']);

    // Build
    grunt.registerTask('build', ['uglify:dist', 'cssmin:dist', 'imagemin:dist']);

    // Watch
    grunt.registerTask('w', ['watch']);

};
