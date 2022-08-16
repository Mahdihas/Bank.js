//step1 add click listener
document.getElementById('button-submit').addEventListener('click', function(){
//2 step get email address inside the field
//always remember to get text use .value
const emailField = document.getElementById('user-email');
const email      = emailField.value;
console.log(email);
const passField = document.getElementById('u-password');
const password  = passField.value;
console.log(password);
 
// Danger: don't check veryfi email or password on the client side.
//step 3 check whether valid or invalid  and verify email or password
if(email==="mahdihasa@gmail.com" && password==='secret'){
  window.location.href = 'bank.html'
}
else if(email!=="mahdihasa@gmail.com"){
    alert('wrong user name')
}
else{
    alert('wrong Password')
}
// step 5 
})

