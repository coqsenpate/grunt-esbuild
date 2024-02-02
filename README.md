# grunt-esbuild

> Runs esbuild in grunt.

This task directly sends the provided config to the build function of [esbuild](https://esbuild.github.io/) (which you must provide).

## Install

```
$ npm install --save-dev esbuild coqsenpate/grunt-esbuild
```

## Usage

```js
require('load-grunt-tasks')(grunt);

grunt.initConfig({
  esbuild: {
    options: {
      buildFunction: require('esbuild').build
    }
    dist: {

    }
  }
});

grunt.registerTask('default', ['esbuild']);
```