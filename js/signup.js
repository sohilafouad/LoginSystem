let userName=document.getElementById('userName');
let userEmail=document.getElementById('userEmail');
let userPassword=document.getElementById('userPassword');
let signUpBtn=document.getElementById('signUpBtn'); 
let alertMassage=document.getElementById('alertMassage');
let userAccounts=[];

// check in lw fe data a3mlha save in useraccounts
if(localStorage.getItem('users') !=null){
    userAccounts=JSON.parse(localStorage.getItem('users'));
}
//main function
function signUp(){
    let user={
        name:userName.value,
        email:userEmail.value,
        password:userPassword.value
    }
    if (checkInputs()== true){
        getAlert('All Inputs Are Required','red');
    }else{
        if(checkEmailExit()==true){
            getAlert('This Email Already exist','red');
        }else{
userAccounts.push(user);
localStorage.setItem('users',JSON.stringify(userAccounts));//to save accounts in localstorage
clearInputs();
getAlert('you can login now','green');
        }
    }
    //window.location.href='login.html';

}
function getAlert(massege,color){
    alertMassage.classList.replace('d-none' ,'d-block');
    alertMassage.innerHTML=massege;
    alertMassage.style.color=color;
    }
    function clearInputs(){
        userName.value=null;
        userEmail.value=null;
        userPassword.value=null;
    }
    function checkEmailExit(){
        for(let i=0; i<userAccounts.length;i++){
            if(userAccounts[i].email==userEmail.value) return true;
        }

    }
    function checkInputs(){
        if(userName.value=='' ||userEmail.value==''||userPassword.value=='')
            return true;
else
return false
        
    }
signUpBtn.addEventListener('click',signUp)