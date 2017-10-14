var express = require('express');
var app = express();
var port = 5000;


app.use(express.static('server/public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var historicalResults =[];
var result = [];

app.post('/addition', function(req, res){
    console.log(req.body);
    console.log(req.body.firstNumber);
    var firstNumber = parseFloat(req.body.firstNumber);
    var secondNumber = parseFloat(req.body.secondNumber);
    var operator = req.body.operator;

    function addItUpServer(){
        newNumber = (firstNumber + secondNumber);
        result = [];
        result.push(newNumber);
        historicalResults.push(newNumber);
    }
        addItUpServer();
    
    
    res.send(result);
    
});

app.post('/subtraction', function (req, res) {
    console.log(req.body);
    console.log(req.body.firstNumber);
    var firstNumber = parseFloat(req.body.firstNumber);
    var secondNumber = parseFloat(req.body.secondNumber);
    var operator = req.body.operator;

    function subtractItDownServer() {
        newNumber = (firstNumber - secondNumber);
        result = [];
        result.push(newNumber);
        historicalResults.push(newNumber);
    }

    subtractItDownServer();
    console.log(result);


    res.send(result);

});

app.post('/division', function (req, res) {
    console.log(req.body);
    console.log(req.body.firstNumber);
    var firstNumber = parseFloat(req.body.firstNumber);
    var secondNumber = parseFloat(req.body.secondNumber);
    var operator = req.body.operator;

    function divideItServer() {
        newNumber = (firstNumber / secondNumber);
        result = [];
        result.push(newNumber);
        historicalResults.push(newNumber);
    }

    divideItServer();
    console.log(result);


    res.send(result);

});

app.post('/multiplication', function (req, res) {
    console.log(req.body);
    console.log(req.body.firstNumber);
    var firstNumber = parseFloat(req.body.firstNumber);
    var secondNumber = parseFloat(req.body.secondNumber);
    var operator = req.body.operator;

    function multiplyItServer() {
        newNumber = (firstNumber * secondNumber);
        result = [];
        result.push(newNumber);
        historicalResults.push(newNumber);
    }

    multiplyItServer();
    console.log(result);


    res.send(result);

});


app.listen(port, function () {
    console.log('listening on port:', port);
    
    
});