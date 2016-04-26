var fs = require('fs');
var path = require('path');
var gd = require('node-gd');
var dir = process.argv[2];
fs.readdir(dir, function (err, files) {
    if (err) {
        throw err;
    }

    files.map(function (file) {
        return path.join(dir, file);
    }).filter(function (file) {
        return fs.statSync(file).isFile();
    }).forEach(function (file) {
        console.log("%s", file);
    });
});
