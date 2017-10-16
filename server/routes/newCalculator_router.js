var express = require('express');
var router = express.Router();

var historicalResults = [];
var result = [];

router.post('/', function (req, res) {
    var firstNumber = parseFloat(req.body.firstNumber);
    var secondNumber = parseFloat(req.body.secondNumber);
    var operator = req.body.operator;
    var result = [];
    var newNumber;
    switch (operator) {
        case '+':
            newNumber = firstNumber + secondNumber;
            break;

        case '-':
            newNumber = firstNumber - secondNumber;
            break;

        case '*':
            newNumber = firstNumber * secondNumber;
            break;

        case '÷':
            newNumber = firstNumber / secondNumber;
    }
    result.push(newNumber);
    req.body.newNumber = newNumber;
    historicalResults.push(req.body);

    res.send(result);

});

module.exports = router;