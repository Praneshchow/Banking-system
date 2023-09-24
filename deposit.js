
// step 1: add event listener to the deposit button. 
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step 2: get the deposit amount from the deposit input field. 
    // for input field use .value to the deposit input value. 
    const depositField = document.getElementById('deposit-field');       // depositField is deposit input. 
    const newDepositAmount = depositField.value;
    
    // step 3: get the current deposit total 
    // use innerText for taking the text 
    const depositTotalElement = document.getElementById('deposit-total');    // deposit output. 
    
    const previousDepositTotal = depositTotalElement.innerText;

    // step 4: add numbers of the total deposit. (Must convert variable value string to float)
    const currentDepositTotal = parseFloat(previousDepositTotal) + parseFloat(newDepositAmount);    // here the values are string. So it need to convert to float. 
    depositTotalElement.innerText = currentDepositTotal;


    // step 5: Get the balance of the current. 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotalElement.innerText;

    // step 6: get balance current total. 
    const currentBalanceTotal = parseFloat(previousBalanceTotal) + parseFloat(newDepositAmount);
    balanceTotalElement.innerText = currentBalanceTotal;

    // step : deposit field will be clear. 
    depositField.value = ''; 
})

