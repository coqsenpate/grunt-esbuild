'use strict'

module.exports = function(grunt) {
	grunt.registerMultiTask('esbuild', 'Runs esbuild', async function () {
		const done = this.async()
		const options = this.options()
		console.log('options:',options)

		if (!options.buildFunction) {
			// We can't get the esbuild object directly because of a circular reference that causes a grunt error.
			grunt.fatal('Build function has not been provided.')
			return
		}

		grunt.verbose.writeln('Using configuration:',this.data);
		await options.buildFunction(this.data)
		grunt.log.ok('Esbuild complete.');
		done()
	})
}
