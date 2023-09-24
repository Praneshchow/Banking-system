/*
step 1: add event handler with withdraw button.
step 2: get the withdraw amount from the withdraw input field. 
step 3: get the previous withdraw total. 
step 4: calculate total withdraw amount. 
step 5: 

*/

// step 1.
document.getElementById('btn-withdraw').addEventListener('click', function(){
    console.log('Total');
    // step 2.
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdraw = withdrawField.value;

    // step 3.
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = withdrawTotalElement.innerText;
    console.log(previousWithdrawTotal);

    // step 4.

});


