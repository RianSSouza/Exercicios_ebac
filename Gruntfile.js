const { watch } = require("less");

module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.JSON'),
        less:{
            development:{
                files:{
                    'dev/styles/main.css' : 'src/styles/main.less'
                }
            }
        },
        watch:{
            less:{
                files:['src/styles/**/*.less'],
                tasks:['less:development']
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
}
