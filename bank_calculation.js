// step1: Add event listener to the deposit button
document.getElementById("deposit-amount").addEventListener("click",function(){
    // step2:get the deposit amount from the deposit input field
    // for input field use .value to the value inside the input 
    // step3: get the current deposit totallfield
   const depositField=document.getElementById("depositMoney");
   let NewdepositAmount=Number(depositField.value);
//    console.log(typeof NewdepositAmount);

    if(NewdepositAmount<=0 || NewdepositAmount<=10){
        alert("please enter  amount number that will be greater than 0 and 10")
        depositField.value=''
    }

   
    
    else{
        const depositTotalElement=document.getElementById("deposit-amaount-store")
        //    console.log(depositMoney);
        //    console.log(typeof depositMoney)
        
            const PreviousH4=depositTotalElement.innerText;
            const PreviousNum=Number(PreviousH4);
            // step4:add the total deposit amount
            const currentTotall=NewdepositAmount+PreviousNum;
            depositTotalElement.innerText=currentTotall;
            
            
            const PreviousBalanceAmount=document.getElementById('balance-amount-taka');
        
            const PreviousBalanceAmountTaka=Number(PreviousBalanceAmount.innerText);
            const Balance=NewdepositAmount+PreviousBalanceAmountTaka
            PreviousBalanceAmount.innerText=Balance;
            console.log(PreviousBalanceAmountTaka)
           
            depositField.value=''
    }
    

 

    
    

     
  
      
})