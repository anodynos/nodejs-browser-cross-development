module.exports = gruntFunction = (grunt) ->

  grunt.initConfig gruntConfig =
    urequire:
      library:
        path: "source/library"
        dstPath: "build/UMD"
        runtimeInfo: ['EventEmitter']
        template: 'UMDplain'

      combined:
        derive: 'library'
        main: 'Observable'
        dependencies: exports: root: {'Observable': 'Obs'}
        dstPath: "build/almond/Observable.js"
        template: 'combined'

  grunt.loadNpmTasks "grunt-urequire"