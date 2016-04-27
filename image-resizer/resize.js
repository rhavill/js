
var fs = require('fs');
var path = require('path');
var gd = require('node-gd');
var sourceDir = process.argv[2];
var destDir = process.argv[3];
fs.readdir(sourceDir, function (err, files) {
    if (err) {
        throw err;
    }

    files.map(function (file) {
        return path.join(sourceDir, file);
    }).filter(function (file) {
        return fs.statSync(file).isFile();
    }).filter(function (file) {
        return (path.extname(file) == '.jpg');
    }).forEach(function (file) {
    	var extension = path.extname(file);
    	var basename = path.basename(file, '.jpg');
    	var newPath = destDir + '/' + basename + '_1920' + extension;
        console.log("%s (%s)", file, newPath);
		gd.openJpeg(file, function(err, img) {
		  if (err) {
		  	console.log(file,'error!', err);
		    //throw err;
		  }
		  else {
			  var newImg = img.saveJpeg(newPath, 100, function(err) {
			    if (err) {
			      throw err;
			    }
			  });
			  img.copyResized(newImg, 0, 0, 0, 0, 1920, 1080, 1920*2, 1080*2);
			}
		});	
    });
});
