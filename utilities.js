// --------- Utilities file stores the functions ------------

// Input value from the Deposit input. 
function getInputValue(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;             // value is string. 
    const inputFieldValue = parseFloat(inputFieldValueString);  // convert string to float  number. 
    inputField.value = '';          // clear the input field. 
    return inputFieldValue;
}

// value taking from the Balance value. 
function getTextElementValue(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const value = parseFloat(elementValueString);
    return value;
}

// set the new value to the text element. 
function setTextElementValue(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}




