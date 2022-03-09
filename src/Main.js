//module Main

var chokidar = require('chokidar');

var glob = require('glob');

exports.gaze = function(globs, cb){
  var files = [];

  globs.forEach(function(a){
    var result = glob.sync(a);
    files = files.concat(result);
  });

  var watcher = chokidar.watch(files, {
    persistent: true
  });

  watcher.on('change', function(filepath) {
    console.log(filepath);
    cb(filepath)();
  });
};
