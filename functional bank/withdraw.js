// 1.add event
//2. get withdraw amountt by using functon from inputfiel
//3 get previous withdreaw amount by using function getText.
//4 calculate widthdraw total and set value
//5 set by using function
//6 previous balance total
//set balance total using set function
document.getElementById('btn-withdraw').addEventListener('click', function(){
 
const newWithdrawAmount     = getInputValuById('withdraw-field');
const previousWithdrawTotal = getElementValueById('withdraw-total')
const newWithdrawTotal      = previousWithdrawTotal + newWithdrawAmount;
setTextElementValueById('withdraw-total', newWithdrawTotal);

const previousbalanceTotal = getElementValueById('balance-total');
const newBalanceTotal      = previousbalanceTotal - newWithdrawAmount;
setTextElementValueById('balance-total', newBalanceTotal);

})