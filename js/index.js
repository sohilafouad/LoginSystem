let welcomeMassage=document.getElementById('welcomeMassage');
let logOutBtn=document.getElementById('logOutBtn');
 if(localStorage.getItem('userName') !=null){
    welcomeMassage.innerHTML=` welcome ${localStorage.getItem('userName')}`;
 }
 function logOut(){
    window.location.href='login.html';
    localStorage.removeItem('userName'); 
 }
 logOutBtn.addEventListener('click',logOut)