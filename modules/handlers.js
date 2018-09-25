var fs = require('fs');
var formidable = require('formidable');


exports.welcome = function(request, response) {
    console.log("Rozpoczynam obsługę żądania welcome.");
    fs.readFile('templates/start.html', function(err, html) {
        response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        response.write(html);
        response.end();
    });
}

exports.style = function(request, response) {
    console.log("Rozpoczynam obsługę żądania style.");
    fs.readFile('templates/style.css', function(err, css) {
        response.writeHead(200, {"Content-Type": "text/css; charset=utf-8"});
        response.write(css);
        response.end();
    });
}

exports.styleUpload = function(request, response) {
    console.log("Rozpoczynam obsługę żądania styleUpload.");
    fs.readFile('templates/styleUpload.css', function(err, css) {
        response.writeHead(200, {"Content-Type": "text/css; charset=utf-8"});
        response.write(css);
        response.end();
    });
}

exports.upload = function(request, response) {
    console.log("Rozpoczynam obsługę żądania upload.");
    var form = new formidable.IncomingForm();
    form.parse(request, function(error, fields, files) {
        fs.renameSync(files.upload.path, "test.png");
        fs.readFile('templates/upload.html', function(err, html) {
            response.writeHead(200, {"Content-Type": "text/html; arset=utf-8"});
            response.write(html);
            response.end();
        })
    });
}

exports.error = function(request, response) {
    console.log("Nie wiem co robić.");
    fs.readFile('templates/404.png', function(err, data) {
        response.write(data);
        response.end();
    });
}

exports.show = function(request, response) {
    fs.readFile("test.png", "binary", function(error, file) {
        response.writeHead(200, {"Content-Type": "image/png"});
        response.write(file, "binary");
        response.end();
    });
}

