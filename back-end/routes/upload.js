'use strict';
var express = require('express'),
    router = express.Router(),
    fs = require('fs'),
    path = require('path'),
    busboy = require('connect-busboy');
;
 
var Busboy = require('busboy');

router.post('/image', function(req, res) {
    var busboy = new Busboy({ headers: req.headers });
    var patrimonyName;
        busboy.on('field', function(fieldname, val){
            patrimonyName = val;
        });
        busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
        var saveTo = path.join(__dirname, '/../uploads/', patrimonyName);
        file.pipe(fs.createWriteStream(saveTo));
        });
        busboy.on('finish', function() {
        res.writeHead(200, { 'Connection': 'close' });
        res.end("That's all folks!");
        });
        return req.pipe(busboy);
})

router.get('/image/:name', function(req,res){
    var imgPath = path.join(__dirname, '/../uploads/', req.params.name);
    //read the image using fs and send the image content back in the response
    fs.readFile(imgPath, function (err, content) {
        if (err) {
            res.writeHead(400, {'Content-type':'text/html'})
            //console.log(err);
            res.end("No such image");    
        } else {
            //specify the content type in the response will be an image
            res.writeHead(200,{'Content-type':'image/jpg'});
            res.end(content);
        }
    });
})

 
module.exports = router;