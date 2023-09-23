
// step 1: add event listener to the deposit button. 
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step 2: get the deposit amount from the deposit input field. 
    // for input field use .value to the deposit input value. 
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;
    
    // step 3: get the current deposit total 
    // use innerText for taking the text 
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmount;
})

