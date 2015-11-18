(function(){
    'use strict';

    module.exports = function(grunt) {
        require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

        grunt.initConfig({
            watch:{
                options: {
                    livereload: true
                },
                app: ['app/**/*.js', 'app/**/*.css', 'app/**/*.html']
            },
            jshint: {
                options: {
                    jshintrc: true
                },
                app: ['app/**/*.js']
            },
            copy: {
                app: {
                    files: [
                        {
                            expand: true,
                            src: ['app/**'],
                            dest: 'build/'
                        }
                    ]
                }
            },
            concat: {
                options: {
                    nonull: true
                },
                appJs: {
                    src: [
                        'build/app/js/app-config.js',
                        'build/app/**/*.js',
                        '!build/app/**/*-controller*.js'
                    ],
                    dest: 'build/source.js'
                },
                appCss: {
                    src: [
                        'build/app/**/*.css'
                    ],
                    dest: 'build/source.css'
                }
            },
            clean: {
                app: {
                    src: ['build']
                },
                removerLixo:{
                    src: [
                        'build/app/**/*.js',
                        'build/app/**/*.css',
                        '!build/app/**/*-controller.js',
                        '!build/app/source.js',
                        '!build/app/source.css'
                    ]
                }
            },
            ngAnnotate: {
                options: {
                    singleQuotes: true
                },
                app: {
                    files: [
                        {
                            expand: true,
                            src: ['build/**/*.js']
                        }
                    ]
                }
            },
            uglify: {
                app: {
                    files: [
                        {
                            expand: true,
                            src: ['build/**/*.js']
                        }
                    ]
                }
            },
            cssmin: {
                app: {
                    files: [
                        {
                            expand: true,
                            src: ['build/**/*.css']
                        }
                    ]
                }
            },
            htmlmin: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true
                },
                app: {
                    files: [
                        {
                            expand: true,
                            src: ['build/**/*.html']
                        }
                    ]
                }
            }
        });

        grunt.registerTask( 'build', [
            'clean:app',
            'copy',
            'concat',
            'clean:removerLixo',
            'ngAnnotate',
            'uglify',
            'cssmin',
            'htmlmin'
        ]);
    };
})();