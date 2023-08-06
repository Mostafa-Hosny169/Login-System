
//hold data from html
var signInEmail = document.getElementById("signInEmail");
var signInPassword = document.getElementById("signInPassword");
var login = document.getElementById("login");
var incorrectMessage = document.getElementById("incorrect");
var reqInputMassage = document.getElementById("inputReq");

//creat an arry to get data from local storage
var containerOfEmails =[];

//get data
 if(localStorage.getItem("Emails") != null){
    containerOfEmails = JSON.parse(localStorage.getItem("Emails"))
 }

 //*function to check sign in data
 function signInCheck(){

    var signInCheck = {
        email : signInEmail.value ,
        password : signInPassword.value
    }

    var isExist = false;
    for(var i=0 ; i < containerOfEmails.length ; i++){
        if(containerOfEmails[i].email == signInCheck.email && containerOfEmails[i].password == signInCheck.password){
            isExist = true;
            containerOfEmails[i];
            break;
        }
    
    }

    if(isExist){
       localStorage.setItem("sessionUsername",JSON.stringify(containerOfEmails[i].name));
       window.location = './pages/home.html';
    }
    else{
        incorrectMessage.classList.remove('d-none');
        reqInputMassage.classList.add('d-none');

    }
 }


//! event when i click on the login button the signInCheck function start
 login.addEventListener('click' , function(){
    if(signInEmail.value.length==0 || signInPassword.value.length==0){
        reqInputMassage.classList.remove('d-none');
        incorrectMessage.classList.add('d-none');

    }

    else{
        signInCheck();
    }
     
 })
