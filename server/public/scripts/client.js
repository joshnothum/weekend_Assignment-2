console.log('We Ready');


$(document).ready(weReady);

function weReady() {
    displayHistory();
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
    $('.test').on('click', calculator );
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

/* Originally had a dedicated function for each math operation.  They are below:

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

// }*/

function clearIt() {
    location.reload();
}

function calculator() {
    event.preventDefault();//to prevent defualt reset of form
    
    //setting my variables to put into array
    type = $(this).data().type;
    console.log(type);//testing to see how type is logged

    firstNumber = $('#firstNumber').val();
    secondNumber = $('#secondNumber').val();
    
    //switching type variable to operator for consistency;
    //I may have been able to change data-operator
    var operator = type;

    //putting variables into an object to send to server.
    var calcData = {firstNumber, secondNumber, operator};
    console.log(calcData);
    
    $.ajax({
        method: "POST",
        url: '/eval',
        data: calcData
    }).done(function (response) {
        console.log(response);
        $('#answers').append('<br>'+response[0]+'</br>');

    }).fail(function (message) {
        console.log('fail');
    });
    //resetting input fields to blank
    firstNumber = $('#firstNumber').val('');
    secondNumber = $('#secondNumber').val('');
    displayHistory();
}

//declaring empty arrays to store data.
var numero=[];
var evaluator =[];
var calculate= [];

function styleForCaclulator() {
    var nintendo = ($(this).val());
    $('.visible').append(nintendo);
    //appending each click to DOM
    //pushing each nintendo into numero for storage
    numero.push(nintendo);

    console.log(nintendo);
}

function getOperator() {
    //getOperator runs after an operator is clicked. .math class buttons
    //joining all individual numbers into string
    numero = numero.join('');
    //changing string into number. 
    parseInt(numero);
    //sega is my operator
    var sega = $(this).val();
    $('.visible').append('<br>'+ sega + '<br>');
    parseInt(sega); //not sure if sega needs a parseInt
    calculate.push(numero);//pushing numero, now a number into calculate array
    calculate.push(sega);//pushing operator into array
    console.log(numero);
    numero =[];//empyting numero
    console.log(calculate);
    

    
}

function getData() {
    //getData runs after the = sign is clicked
    //joing the numero and a parseInt again
    $('#doesItWork').empty();
    numero = numero.join('');
    parseInt(numero);
    //pushing numero, which is now the second number
    calculate.push(numero);
    console.log(calculate);
    numero=[];

    //declaring variables from position in calculate array
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
    $('#doesItWork').append('This is your stupid answer:','<br>' + response +'</br>');
    $('.visible').empty();
    calculate=[];
    
    }).fail(function(message){
        console.log('Stimpy! You Idiot!');
        
    });
    displayHistory();
}

function displayHistory() {
    $('#history').empty();
    $.ajax({
        method: "GET",
        url: '/history'
    }).done(function(response){
        var firstNumberArray=[];
        var secondNumberArray=[];
        var operatorArray=[];
        var newNumberArray=[];
        console.log(response);
        for(var i = 0;i<response.length; i++){
            $('#history').append('<p>' + response[i].firstNumber + "  " + response[i].operator + "  " + response[i].secondNumber + " = " + response[i].newNumber+'</p>');
    }
        console.log(firstNumberArray);
        console.log(operatorArray);
        console.log(secondNumberArray);
        console.log(newNumberArray);

        console.log(response);
    }).fail(function(message){
        console.log('fail');
        
    });
    
}

// function getNumbers() {

//     var sendForCalc = $('#visible').val();

//     parseInt(sendForCalc);

//     console.log(sendForCalc);
// }

