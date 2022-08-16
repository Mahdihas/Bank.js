document.getElementById('button-deposite').addEventListener('click', function(){
//step one   
    // console.log('deposite button click')

    // step2 get deposite amount from the input field
    //for inpust field use .value to get text
    const depositeField           = document.getElementById('deposite-field');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount       = parseFloat(newDepositeAmountString);
    //step three get the total current deposite 
    //for non input (elemnet other than input ,textarea)use innerText to get the text

    const depositeTotalElement            = document.getElementById('deposite-total');
    const previousDepositeTotalString     = depositeTotalElement.innerText;
    const previousDepositeTotal           =parseFloat(previousDepositeTotalString);
    //add number to set the total deposite. 
    const currentDepositeTotal     = previousDepositeTotal + newDepositeAmount;
    
     // set the deposite total
    depositeTotalElement.innerText = currentDepositeTotal;

    //step 5 get total current balance
    const balancetotalElemnent      = document.getElementById('balance-total');
    const previousBalanceTotalstr   = balancetotalElemnent.innerText;
    const previousBalanceTotal      = parseFloat(previousBalanceTotalstr);
    //6 calculate current total balance
     const currentBalanceTotal      = previousBalanceTotal + newDepositeAmount;
   
     //set the balance total 
    balancetotalElemnent.innerText  =currentBalanceTotal;

    //step4 clear the deposite field
    depositeField.value = '';
})