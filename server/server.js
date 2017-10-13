var express = require('express');
var app = express();
var port = 5000;


app.use(express.static('server/public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var result = [];

app.post('/addition', function(req, res){
    console.log(req.body);
    console.log(req.body.firstNumber);
    var firstNumber = req.body.firstNumber;
    var secondNumber = req.body.secondNumber;
    var operator = req.body.operator;

    function addItUpServer(){
        newNumber = (firstNumber + secondNumber);
        result.push(newNumber);
    }
    
    
    res.sendStatus(201);
    
});


app.listen(port, function () {
    console.log('listening on port:', port);
    
    
});