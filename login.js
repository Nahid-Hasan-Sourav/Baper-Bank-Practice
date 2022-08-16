// step1:add click event handler with the submit button

document.getElementById("submit").addEventListener("click",function(e){

    //step2: get the mail address inside the email input field
    //alawys remember to use .value to get text from an input field
    // const userEmail=document.getElementById("email").value;
   

    //step3:get password
    //3.a:set id on html element in password field
    //3.b:get the element
    //3.b: get the value from the element
    // const User=[
    //     {
    //     Email1:"nahidvai@gmail.com",
    //     Password1:"12345"
    //     },
    //     {
    //     Email2:"sourav@gmai.com",
    //     Password2:"123456"
    //     },
    //     {
    //     Email3:"preya@gmail.com",
    //     Password3:"1234567"
    //     }

    // ]   
    // const userPassword=document.getElementById("password").value;

    

    // User.map((person)=>{
    //    if(userEmail===person.Email1 && userPassword===person.Password1){
    //     // console.log("GOT THIS")
    //     window.location.href='bank.html';
    //    }

    //    else{
    //     alert("wrong")
    //    }

      
    // })
    // console.log(User);


    const userEmail=document.getElementById("email").value;
    const userPassword=document.getElementById("password").value;

    if(userEmail=="sourav@gmail.com" && userPassword=="12345")
    {
        alert("Login Successful")
        window.location.href='bank.html';
    }
    else{
        alert("wrong")
    }

   e.preventDefault()

})


