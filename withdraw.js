/*
step 1: add event handler with withdraw button.
step 2: get the withdraw amount from the withdraw input field. 
step 3: get the previous withdraw total. 
step 4: calculate total withdraw amount. 
step 5: get the previous balance. 
step 6: calculate the total balance and then 
step 7: clear the input field. 

*/

// step 1.
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step 2.(Withdraw part)
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = withdrawField.value;
    

    // step 7. (clear the input field)
    withdrawField.value = '';

    // This is used for not taking invalid input. 
    if (isNaN(newWithdrawAmount)){
        alert('Please input the valid number');
        return;
    }

    // step 3.
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = withdrawTotalElement.innerText;
    

    // step 5. (Balance part)
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotalElement.innerText;
   
    // For checking the valid balance. 
    if (parseFloat(newWithdrawAmount)>parseFloat(previousBalanceTotal)){
        alert('Balance Error');
        return;
    }

    // step 4. (withdraw add)
    const currentWithdrawTotal = parseFloat(previousWithdrawTotal) + parseFloat(newWithdrawAmount);
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // Balance Add.
    const newBalanceTotal = parseFloat(previousBalanceTotal) - parseFloat(newWithdrawAmount);
    balanceTotalElement.innerText = newBalanceTotal;
});


