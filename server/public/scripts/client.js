console.log('We Ready');


$(document).ready(weReady);

function weReady() {
    console.log('js sourced');
    clickHandler();
}

function clickHandler() {

    // $('#addition').on('click', addItUp);
    // $('#subtraction').on('click', subtractItDown);
    // $('#division').on('click', divideIt);
    // $('#multiplication').on('click', multiplyIt);
    $('#clear').on('click', clearIt);
    // $('.test').on('click', typeChanger);
    $('.test').on('click',calculate );
    //$('.number').on('click', checker );
    $(".number").on('click', styleForCaclulator);
    $(".math").on('click', getOperator);
    $('#evaluate').on('click', getData);
}

var type = "test";

console.log(type);

// function typeChanger() {
//     event.preventDefault();
//     type = "test";
//     type = $(this).data().type;
//     console.log(type);
//     return type;
    
// }

console.log(type);

// function addItUp() {
//      event.preventDefault();
//      firstNumber = $('#firstNumber').val();
//      secondNumber = $('#secondNumber').val();
//      var operator = 'add';
//      console.log(firstNumber, secondNumber, operator);
//      var addData = {firstNumber, secondNumber, operator};
//      console.log(addData);
//      $('#firstNumber').val('');
//      $('#secondNumber').val('');

//      $.ajax({
//          method:"POST",
//          url: '/addition',
//          data: addData
//      }).done(function(response){
//         console.log(response);
//          $('#answers').append(response[0]);
//      }).fail(function(message){
//          console.log('fail');
         
     
//      });
     
//  }

//  function subtractItDown() {
//      event.preventDefault();
//      firstNumber = $('#firstNumber').val();
//      secondNumber = $('#secondNumber').val();
//      var operator = 'subtract';
//      console.log(firstNumber, secondNumber, operator);
//      var subtractData = { firstNumber, secondNumber, operator };
//      console.log(subtractData);
//      $('#firstNumber').val('');
//      $('#secondNumber').val('');

//      $.ajax({
//          method: "POST",
//          url: '/subtraction',
//          data: subtractData
//      }).done(function (response) {
//          console.log(response);
//          $('#answers').append(response[0]);

//      }).fail(function (message) {
//          console.log('fail');


//      });
// }


// function divideIt() {
//     event.preventDefault();
//     firstNumber = $('#firstNumber').val();
//     secondNumber = $('#secondNumber').val();
//     var operator = 'divide';
//     console.log(firstNumber, secondNumber, operator);
//     var divideData = {firstNumber,secondNumber,operator};
//     console.log(divideData);
//     $('#firstNumber').val('');
//     $('#secondNumber').val('');

//     $.ajax({
//         method: "POST",
//         url: '/division',
//         data: divideData
//     }).done(function (response) {
//         console.log(response);
//         $('#answers').append(response[0]);

//     }).fail(function (message) {
//         console.log('fail');


//     });
// }

// function multiplyIt() {
//     event.preventDefault();
//     firstNumber = $('#firstNumber').val();
//     secondNumber = $('#secondNumber').val();
//     var operator = 'multiply';
//     console.log(firstNumber, secondNumber, operator);
//     var multiplyData = {firstNumber,secondNumber,operator};
//     console.log(multiplyData);
//     $('#firstNumber').val('');
//     $('#secondNumber').val('');

//     $.ajax({
//         method: "POST",
//         url: '/multiplication',
//         data: multiplyData
//     }).done(function (response) {
//         console.log(response);
//         $('#answers').append(response[0]);

//     }).fail(function (message) {
//         console.log('fail');
//     });

// }

function clearIt() {
    location.reload();
}
// function checker() {
//     event.preventDefault();
//     console.log($(this).val());

    
// }

function calculate() {
    event.preventDefault();
    
    type = $(this).data().type;
    console.log(type);

    firstNumber = $('#firstNumber').val();
    secondNumber = $('#secondNumber').val();
    

    var operator = type;
    var calcData = {firstNumber, secondNumber, operator};
    console.log(calcData);
    
    $.ajax({
        method: "POST",
        url: '/eval',
        data: calcData
    }).done(function (response) {
        console.log(response);
        $('#answers').append(response[0]);

    }).fail(function (message) {
        console.log('fail');
    });

    firstNumber = $('#firstNumber').val('');
    secondNumber = $('#secondNumber').val('');
}
var numero=[];
var evaluator =[];
var calculate= [];
function styleForCaclulator() {
    
    var nintendo = ($(this).val());
    $('.visible').append(nintendo);
    numero.push(nintendo);

    console.log(nintendo);
    
    
}

function getOperator() {
    numero = numero.join('');
    parseInt(numero);
    var sega = $(this).val();
    $('.visible').append('<br>'+ sega + '<br>');
    parseInt(sega);
    calculate.push(numero);
    calculate.push(sega);
    console.log(numero);
    numero =[];
    console.log(calculate);
    

    
}

function getData() {
    numero = numero.join('');
    parseInt(numero);
    calculate.push(numero);
    console.log(calculate);
    numero=[];
    var firstNumber = calculate[0];
    var secondNumber= calculate[2];
    var operator = calculate[1];

    
    var newData = {firstNumber, secondNumber, operator};

    console.log(newData);
    

    $.ajax({
        method: "POST",
        url: '/newCalculator',
        data: newData
    }).done(function(response){
    console.log(response);
    $('#doesItWork').append('Is this your stupid answer?','<br>' + response +'</br>');
    
    }).fail(function(message){
        console.log('Stimpy! You Idiot!');
        
    });
    
}

// function getNumbers() {

//     var sendForCalc = $('#visible').val();

//     parseInt(sendForCalc);

//     console.log(sendForCalc);
// }

