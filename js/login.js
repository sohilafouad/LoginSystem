let userEmail=document.getElementById('userEmail');
let userPassword=document.getElementById('userPassword');
let loginBtn=document.getElementById('loginBtn');
let alertMassage=document.getElementById('alertMassage');
let userAccounts=[];
if(localStorage.getItem('users')!= null){
    userAccounts=JSON.parse(localStorage.getItem('users'))

}
function login(){
    if(checkInputs()==true){
        getAlert('All Inputs Are Required','red')
    }else{
        if(checkEmailAndPassword()==true){
            window.location.href='index.html'
        }else{
            getAlert('Email or password ar not correct','red')
        }
    }
  
}


function clearInputs(){
    userEmail.value=null;
    userPassword.value=null;
}
function getAlert(massege,color){
alertMassage.classList.replace('d-none','d-block')
alertMassage.innerHTML=massege;
alertMassage.style.color=color;
}
function checkInputs(){
    if(userEmail.value==''||userPassword.value=='')
        return true;
    else
    return false;
}
function checkEmailAndPassword(){
    for(let i=0;i<userAccounts.length;i++){
        if(userAccounts[i].email==userEmail.value &&userAccounts[i].password==userPassword.value){
            localStorage.setItem('userName',userAccounts[i].name);
            return true;

        }
    }
}
loginBtn.addEventListener('click',login)