

//message of errors
var massageName = document.getElementById("massageName");
var massageEmail = document.getElementById("massageEmail");
var massagePassword = document.getElementById("massagePassword");
var massageSucsses = document.getElementById("sucsses");
var massageinputReq = document.getElementById("inputReq");
var massageEmailExist = document.getElementById("exist");

//hold the inputs
var nameInput = document.getElementById("name") ;
var emailInput = document.getElementById("email") ;
var passwordInput = document.getElementById("password") ;

//hold signup button
var signupButton = document.getElementById("signup");

//creat an arry to save objects in
var containerOfEmails =[];

//get data from local storage to an arry after reload the page
if(localStorage.getItem("Emails")!=null){
    containerOfEmails =JSON.parse( localStorage.getItem("Emails"));
}

//!event whe i click on the signup button
signupButton.addEventListener('click', function(){

    if(nameInput.value.length==0 && emailInput.value.length==0 && passwordInput.value.length==0 ){
        massageSucsses.classList.add('d-none');
        massageinputReq.classList.remove('d-none');
    }

    else{
        massageinputReq.classList.add('d-none');
        massageSucsses.classList.add('d-none');
        massageEmailExist.classList.add('d-none'); 
        if(validationName() && validationEmail() && validationPassword()){
            massageName.classList.add('d-none');
            massageEmail.classList.add('d-none');
            massagePassword.classList.add('d-none');
            creatEmail();
        }

    }
})

//*function that creat an email and save them in the localsStorage & arry
function creatEmail(){
    var emails ={
        name : nameInput.value,
        email : emailInput.value,
        password : passwordInput.value
    }
    
        var emailExists = false;
    
    for (var i = 0; i < containerOfEmails.length; i++) {
        if (containerOfEmails.length!=0 && containerOfEmails[i].email == emails.email) {
            emailExists = true;
            break;
        }
    }
    
    if (!emailExists) {
        containerOfEmails.push(emails); 
        localStorage.setItem("Emails",JSON.stringify(containerOfEmails));
        massageSucsses.classList.remove('d-none');
        massageEmailExist.classList.add('d-none'); 
        clearData();
    } 
    else {
        massageEmailExist.classList.remove('d-none'); 
        massageSucsses.classList.add('d-none');

    }
}
     


//!<=========================VALIDATION=====================>
function validationName(){
    var name = nameInput.value;
    var regexName = /^([a-zA-Z0-9]+\s*)+$/;

    if( regexName.test(name) ){
        massageName.classList.add('d-none');
        return true;
    }

    else if(name==null){
        inputReq.classList.remove('d-none');
    }

    else{
        massageName.classList.remove('d-none');
        return false;
    }
}

function validationEmail(){
    var email = emailInput.value;
    var regexName = /^[A-z]{3,30}\d{0,9}(@gmail\.com|@hotmail\.com|@yahoo\.com)$/;

    if( regexName.test(email) ){
        massageEmail.classList.add('d-none');
        return true;
    }

    else if(email==null){
        inputReq.classList.remove('d-none');
    }

    else{
        massageEmail.classList.remove('d-none');
        return false;
    }
   
}

function validationPassword(){
    var password = passwordInput.value;
    var regexName = /^(?=.*[a-z])(?=.*[0-9])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z0-9\d@$!%*?&#]{8,}$/;

    if( regexName.test(password) ){
        massagePassword.classList.add('d-none');
        return true;
    }
    else if(password==null){
        inputReq.classList.remove('d-none');
    }
    else{
        massagePassword.classList.remove('d-none');
        return false;
    }
}
//!<=========================VALIDATION=====================>


//TODO: clear the inputs after submit
function clearData(){
    nameInput.value = "" ;
    emailInput.value = "" ;
    passwordInput.value = "" ;
}

