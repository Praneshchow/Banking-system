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


// Step 1: (First click the button. Than it works)
document.getElementById('btn-deposit').addEventListener('click', function(){
    // Step 2. (Deposit Part)
    // for input field use .value to the deposit input value. 
    const depositField = document.getElementById('deposit-field');       // depositField is deposit input. 
    const newDepositAmount = depositField.value;
    
    // step 7. (deposit field will be clear) 
    depositField.value = '';
     
    // This is used for not taking invalid input. 
    if (isNaN(newDepositAmount) || newDepositAmount == ''){
        alert('Please input the valid Amount');
        return;
    }

    // use innerText for taking the text 
    const depositTotalElement = document.getElementById('deposit-total');    // deposit output. 
    const previousDepositTotal = depositTotalElement.innerText;

    
    const currentDepositTotal = parseFloat(previousDepositTotal) + parseFloat(newDepositAmount);    // here the values are string. So it need to convert to float. 
    depositTotalElement.innerText = currentDepositTotal;


    // Step 5. (Balance Part)
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotalElement.innerText;

    
    const currentBalanceTotal = parseFloat(previousBalanceTotal) + parseFloat(newDepositAmount);
    balanceTotalElement.innerText = currentBalanceTotal;

});

