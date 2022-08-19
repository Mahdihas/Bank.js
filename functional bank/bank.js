
//1 get the button by id
//3 convert string to number
//2 get the value to the from the input 

document.getElementById('btn-deposite').addEventListener('click', function(){

  const newDepositeAmount     = getInputValuById('deposite-field');
  const previousDepositeTotal = getElementValueById('deposite-total');
  const newDepositeTotal = previousDepositeTotal + newDepositeAmount;
  
  setTextElementValueById('deposite-total' , newDepositeTotal);

  const previousbalanceTotal = getElementValueById('balance-total')
  const newBalanceTotal  = previousbalanceTotal + newDepositeAmount;
  setTextElementValueById('balance-total' , newBalanceTotal);



})