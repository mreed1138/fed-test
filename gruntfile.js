module.exports = function(grunt){
	grunt.initConfig({


		sass: {                              // Task
		    dist: {                            // Target
		      options: {                       // Target options
		        style: 'expanded'
		      },
		      files: {                         // Dictionary of files
		        'HTML-code-test/css/style.css': 'components/sass/style.scss',       // 'destination': 'source'
		        
		      }
		    }
  		}, // add some sass
  		connect:{
  			server: {
  				options:{
  					hostname:'localhost',
  					port:1138,
  					base:'HTML-code-test/',
  					livereload:true
  				}
  			}
  		}, // 
  		watch:{
  			options: {
  				spawn:false,
  				livereload:true
  			},
  			scripts: {
  				files:['HTML-code-test/**/*.html', 'components/sass/**/*.scss'],
  				tasks:['sass']
  			}
  		}//feels like some one is watching me

	}); // initConfig


	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.registerTask('default', ['sass', 'connect','watch'])


}; // wrapper