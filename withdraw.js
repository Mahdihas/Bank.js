//1 add event handler with the button
document.getElementById('button-withdraw').addEventListener('click', function(){
    //2get the amount from the field 

const withdrawField        = document.getElementById('withdraw-field');
const newWithdrawAmountStr = withdrawField.value;
//3 to convert into number use parseFloat
const newWithdrawAmount    = parseFloat(newWithdrawAmountStr);

//4 get previous withdraw total
const withdrawTotalElement     = document.getElementById('withdraw-total');
const previousWithdrawTotalStr = withdrawTotalElement.innerText;
const previousWithdrawTotal    = parseFloat(previousWithdrawTotalStr);
// 5 calculate total withdraw amount
const currentWithdrawTotal     = previousWithdrawTotal + newWithdrawAmount;
//step 6 set total element
withdrawTotalElement.innerText = currentWithdrawTotal;

//8get the previous total
const balanceTotalElement      = document.getElementById('balance-total')
const previousBalanceTotalstr  = balanceTotalElement.innerText;
const previousBalanceTotal     = parseFloat(previousBalanceTotalstr);
//step 9 calculate new balance total
const newBalanceTotal          = previousBalanceTotal - newWithdrawAmount;
balanceTotalElement.innerText  =newBalanceTotal; 
//step 10 set the new balance total


//step 7 clear the input field
withdrawField.value            = " ";


})