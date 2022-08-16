document
  .getElementById("Withdraw-amount")
  .addEventListener("click", function () {
    let WithdrawBalanceString = document.getElementById("Withdraw-Money");
    let WithdrawBalanceNumber = Number(WithdrawBalanceString.value);
    //   console.log(WithdrawBalanceNumber)
    let BalanceAmountString = document.getElementById("balance-amount-taka");
    let BalanceAmountNUmber = Number(BalanceAmountString.innerText);

    if (WithdrawBalanceNumber > BalanceAmountNUmber) {
      alert("Don't have enough amount");
    } else if (WithdrawBalanceNumber <= 0) {
      alert("please provide positive amount number");
    }
     else {
      const PreviousWithdrawAmount = document.getElementById("withdraw-amount");
      const PreviousWithdrawAmountNumber = Number(PreviousWithdrawAmount.innerText);
      console.log(PreviousWithdrawAmountNumber);

      const totalWithdraw = PreviousWithdrawAmountNumber + WithdrawBalanceNumber;
      console.log(totalWithdraw);
      PreviousWithdrawAmount.innerText = totalWithdraw;

      //   console.log(BalanceAmountNUmber);
      const PresentBalance = BalanceAmountNUmber - WithdrawBalanceNumber;
      BalanceAmountString.innerText = PresentBalance;

      WithdrawBalanceString.value = "";
    }
  });
// document.getElementById("Withdraw-amount").addEventListener("click",function(){

//   const WithdrawBalanceString= document.getElementById("Withdraw-Money")
//   const WithdrawBalanceNumber=Number(WithdrawBalanceString.value);
// //   console.log(WithdrawBalanceNumber)

//   const PreviousWithdrawAmount=document.getElementById("withdraw-amount");
//   const PreviousWithdrawAmountNumber=Number(PreviousWithdrawAmount.innerText)
//   console.log(PreviousWithdrawAmountNumber)

//   const totalWithdraw=PreviousWithdrawAmountNumber+WithdrawBalanceNumber;
//   console.log(totalWithdraw)
//   PreviousWithdrawAmount.innerText=totalWithdraw;

//   const BalanceAmountString=document.getElementById("balance-amount-taka");
//   const BalanceAmountNUmber=Number(BalanceAmountString.innerText);
// //   console.log(BalanceAmountNUmber);
//     const PresentBalance=BalanceAmountNUmber-totalWithdraw
//     BalanceAmountString.innerText=PresentBalance;

//   WithdrawBalanceString.value=''

// })
