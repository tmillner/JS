module.exports = function(g) {
	/*
	g.initConfig({
		person: {
			name: "Jared"
		}
	});
	*/

	// Note: as imports of grunt tasks increase this 
	// can be simplified to 1 lineusing load-grunt-tasks
	// as: require('load-grunt-tasks')(grunt)
	// https://www.npmjs.com/package/load-grunt-tasks
	g.loadNpmTasks('grunt-contrib-watch');
	g.loadNpmTasks('grunt-contrib-uglify');
	g.loadNpmTasks('grunt-contrib-clean');
	g.loadNpmTasks('grunt-babel');
	
	// This takes a JSON objects, how we get it doesn't matter
	//
	// Instead of externally moving config in another file
	// it's more common to outsource non task stuff to the file
	// then in initConfig provide json with listed tasks and using
	// templates and such (specify uglify & watch with templates)
	g.initConfig(g.file.readJSON("config.json"));

	g.registerTask('default', function(){
		g.log.writeln('Hello World');
	});
	
	g.registerTask('whatsUp', function(name){
		g.log.writeln('Hello ' + name + '!');
	});
	
	g.registerTask('whatsUpInit', function(){
		g.log.writeln('Hello ' + g.config.get('person').name + '!');
	});

	g.registerTask("thePeople", function(){
		g.log.writeln(JSON.stringify(g.config.get('people')));
	});

	g.registerTask("time", function(){
		g.log.writeln(g.template.process("<%= grunt.template.today() %>"));
		g.log.writeln(g.template.today()); // same thing as ^
	});

	/* NOT Possible, nor is passing it as an array... Possibly
	linting is suited for development rather than as a task
	g.registerTask("lint", function(){
		eslint es6_sample.es6;
	});
	*/

	g.registerTask("templateRecursion", function(){
		var o = {
			"one": "one<%= two %>six",
			"two": "two<%= three %>five",
			"three": "three<%= four %>",
			"four": "four"
		}
		// second arg is option, by default option is init config
		g.log.writeln(g.template.process("<%= one %>", {data: o}));
	});

	g.registerMultiTask('test', function(){
		g.log.writeln(this.target + " : " + this.data);
	});

	g.registerTask('buildIt', [
		'clean:build', 
		'default', 
		'uglify:distributionFolder2',
		'babel'
	]);
}
