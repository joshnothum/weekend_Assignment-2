console.log('We Ready');


$(document).ready(weReady);

function weReady() {
    console.log('js sourced');
    clickHandler();
}

function clickHandler() {
    $('#addition').on('click', addItUp);
    
}
function addItUp() {
     event.preventDefault();
     firstNumber = $('#firstNumber').val();
     secondNumber = $('#secondNumber').val();
     var operator = 'add';
     console.log(firstNumber, secondNumber, operator);
     var addData = {firstNumber, secondNumber, operator};
     console.log(addData);

     $.ajax({
         method:"POST",
         url: '/addition',
         data: addData
     }).done(function(response){
        console.log('success');
         
     }).fail(function(message){
         console.log('fail');
         
     
     });
     
 }
