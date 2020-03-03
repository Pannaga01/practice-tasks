alert('Connected');



function validateEmail(){
    var Email=document.getElementById("email").value;

    var Password=document.getElementById("password").value;
    
    
    if(Email=="upsreya@test.com"&&Password=="test"){
        alert("Valid email!");
        window.open('successful.html');
    }
    else{
        alert("Invalid Email!");
    }
}