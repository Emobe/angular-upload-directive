var express = require('express'),
    pubPath = __dirname + '/public',
    app = express(),
    multer = require('multer');

app.post('/upload', multer({ dest: __dirname + '/uploads'}).single('upload'), function(req, res){
    res.status(200).end();
});

app.use('/lib', express.static(__dirname + '/bower_components/'));
app.use('/public', express.static(__dirname + '/public/'));

app.get('/', function(req, res){
    res.sendFile('index.html', {root: __dirname + '/public/'});
});

app.get('/test', function(req, res){
    res.status(200).end();
});

app.listen(process.env.PORT || 1338, function() {
    console.log("starting angular upload directive...");
});

