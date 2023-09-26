/*
step 1: add event handler with withdraw button.
step 2: get the withdraw amount from the withdraw input field using getInputValue() function. 
step 3: get the previous withdraw amount by using getTextElementValue() function. 
step 4: calculate total withdraw total and set the value. And set new withdraw total by using setTextElementValue() function. 
step 5: get previous balance total by using getTextElementValue() function. 
step 6: calculate new balance total 

*/

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputValue('withdraw-field');

    // This is used for not taking invalid input. 
    if (isNaN(newWithdrawAmount) || newWithdrawAmount == ''){
        alert('Please input the valid Amount');
        return;
    }
    const previousWithdrawTotal = getTextElementValue('withdraw-total');

    
    const previousBalanceTotal = getTextElementValue('balance-total');
    
    // For checking the valid balance. 
    if (parseFloat(newWithdrawAmount)>parseFloat(previousBalanceTotal)){
        alert('Balance is Not Sufficient');
        return;
    }
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;       // 'newWithdrawTotal' is total withdraw. 

    setTextElementValue('withdraw-total', newWithdrawTotal);
    
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValue('balance-total', newBalanceTotal);
});

