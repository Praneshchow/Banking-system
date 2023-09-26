/*
----------- Deposit Part -------------
// step 1: add event listener to the deposit button. 
// step 2: get the deposit amount from the deposit input field.
// step 3: get the current deposit total
// step 4: add numbers of the total deposit. (Must convert variable value string to float)
// step 5: Get the balance of the current. 
// step 6: get balance current total. 
// step 7: deposit field will be clear.
*/


document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputValue('deposit-field');

    // This is used for not taking invalid input. 
    if (isNaN(newDepositAmount) || typeof(newDepositAmount) === 'string'){
        alert('Please input the valid Amount');
        return;
    }    
    const previousDepositTotal = getTextElementValue('deposit-total');

    const newDepositTotal = previousDepositTotal + newDepositAmount;
    
    setTextElementValue('deposit-total', newDepositTotal);           // total deposit set. 
    const previousBalanceTotal = getTextElementValue('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValue('balance-total', newBalanceTotal);
});

