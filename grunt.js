
module.exports = function(grunt) {

  grunt.initConfig({
    lint : ['tasks/*.js'],
    test: {
      all: ['test/put.js']
    },
    s3: {
      key: 'abc',
      secret: 'def',
      bucket: 'test',
      endpoint: '127.0.0.1',
      port: 1337,
      secure: false,
      access: 'public-read'
    }
  });

  grunt.loadTasks(__dirname + '/tasks');
};
