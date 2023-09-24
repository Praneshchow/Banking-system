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

    // step 3.
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = withdrawTotalElement.innerText;

    // step 4.
    const currentWithdrawTotal = parseFloat(previousWithdrawTotal) + parseFloat(newWithdrawAmount);
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step 5. (Balance part)
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotalElement.innerText;

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    // step 7. (clear the input field)
    withdrawField.value = '';
});


