console.log('We Ready');


$(document).ready(weReady);

function weReady() {
    console.log('js sourced');
    clickHandler();
}

function clickHandler() {
    $('#addition').on('click', addItUp);
    $('#subtraction').on('click', subtractItDown);
    $('#division').on('click', divideIt);
    $('#multiplication').on('click', multiplyIt);
}
function addItUp() {
     event.preventDefault();
     firstNumber = $('#firstNumber').val();
     secondNumber = $('#secondNumber').val();
     var operator = 'add';
     console.log(firstNumber, secondNumber, operator);
     var addData = {firstNumber, secondNumber, operator};
     console.log(addData);
     $('#firstNumber').val('');
     $('#secondNumber').val('');

     $.ajax({
         method:"POST",
         url: '/addition',
         data: addData
     }).done(function(response){
        console.log(response);
         $('#answers').append(response[0]);
     }).fail(function(message){
         console.log('fail');
         
     
     });
     
 }

 function subtractItDown() {
     event.preventDefault();
     firstNumber = $('#firstNumber').val();
     secondNumber = $('#secondNumber').val();
     var operator = 'subtract';
     console.log(firstNumber, secondNumber, operator);
     var subtractData = { firstNumber, secondNumber, operator };
     console.log(subtractData);
     $('#firstNumber').val('');
     $('#secondNumber').val('');

     $.ajax({
         method: "POST",
         url: '/subtraction',
         data: subtractData
     }).done(function (response) {
         console.log(response);
         $('#answers').append(response[0]);

     }).fail(function (message) {
         console.log('fail');


     });
}


function divideIt() {
    event.preventDefault();
    firstNumber = $('#firstNumber').val();
    secondNumber = $('#secondNumber').val();
    var operator = 'divide';
    console.log(firstNumber, secondNumber, operator);
    var divideData = {firstNumber,secondNumber,operator};
    console.log(divideData);
    $('#firstNumber').val('');
    $('#secondNumber').val('');

    $.ajax({
        method: "POST",
        url: '/division',
        data: divideData
    }).done(function (response) {
        console.log(response);
        $('#answers').append(response[0]);

    }).fail(function (message) {
        console.log('fail');


    });
}

function multiplyIt() {
    event.preventDefault();
    firstNumber = $('#firstNumber').val();
    secondNumber = $('#secondNumber').val();
    var operator = 'multiply';
    console.log(firstNumber, secondNumber, operator);
    var multiplyData = {firstNumber,secondNumber,operator};
    console.log(multiplyData);
    $('#firstNumber').val('');
    $('#secondNumber').val('');

    $.ajax({
        method: "POST",
        url: '/multiplication',
        data: multiplyData
    }).done(function (response) {
        console.log(response);
        $('#answers').append(response[0]);

    }).fail(function (message) {
        console.log('fail');
    });
}