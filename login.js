
// step 1: add click event handler with the submit button. 
document.getElementById('btn-submit').addEventListener('click', function(){
    // step 2: get the email address inside the email input field. 
    // Always remember to use .value for taking input value. 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    // step 3: take the password from input field. 
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    // step 4: verify the email and password. 
    if (email === 'pranesh@gmail.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert("User Email or Password is Invalid");
    }
});

