var nameOfThePerson = JSON.parse(localStorage.getItem("sessionUsername"));
var nameOfEmail = document.getElementById("name");  
var logOut = document.getElementById("logOut");


nameOfEmail.innerHTML = `${nameOfThePerson}`

logOut.addEventListener('click' , function(){
    localStorage.removeItem("sessionUsername");
    window.location = '../index.html';
})