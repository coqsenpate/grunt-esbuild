# grunt-esbuild

> Runs esbuild in grunt.

This task directly sends the provided config to the build function of [esbuild](https://esbuild.github.io/) (which you must provide).

## Install

```
$ npm install --save-dev esbuild "github:coqsenpate/grunt-esbuild#1.0.0"
```

## Usage

```js
require('load-grunt-tasks')(grunt);

grunt.initConfig({
  esbuild: {
    options: {
      buildFunction: require('esbuild').build
    },
    dist: {
      entryPoints: ['src/main.js'],
      bundle: true,
      outfile: 'dist/main.js',
    }
  }
});

grunt.registerTask('default', ['esbuild']);
```
