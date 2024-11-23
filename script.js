const form = document.querySelector("form");
const fullName = document.getElementById("name"); 
const emailAderess = document.getElementById("email");
const phoneNumber = document.getElementById("phone");
const subject = document.getElementById("subject");
const msg = document.getElementById("message");
;

function sendEmail(){
    const bodyMessage = `Full Name: ${fullName.value} <br> Email: ${emailAderess.value}<br> PhoneNumber: ${phoneNumber.value}<br> Message: ${msg.value} `;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "nourhen.khiari26@gmail.com",
        Password : "E82C6BD5287D5E39032C8E631055183EF25B",
        To : 'nourhen.khiari26@gmail.com',
        From : "nourhen.khiari26@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(message =>{
            if(message == "OK"){
                let popup= document.getElementById("popup");
                    popup.classList.add("open-popup");
      }
    }
    );
}

function validateName(){
    var nameError = document.getElementById('name-error');
    var fName = fullName.value;
    if (fName.length ==0 ){
        nameError.innerHTML = "Name is required"; 
        return false;
    }
    if(!fName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name"; 
        return false; 
    }
    nameError.innerHTML =''; 
    return true;
}
function validateEmail(){
    var eAddress = emailAderess.value;
    var emailError = document.getElementById('email-error');
    if(eAddress.length ==0){
        emailError.innerHTML = "Email is required"; 
        return false;
    }
    if(!eAddress.match(/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)){
        emailError.innerHTML = "Email invalid"; 
        return false;
    }
    emailError.innerHTML =''
    return true; 
}
function validatePhone(){
    var pNumber = phoneNumber.value;
    var phoneError = document.getElementById('phone-error');
    if(pNumber.length == 0){
        phoneError.innerHTML = "Phone is required"; 
        return false;
    }
    if(!pNumber.match(/^[0-9]$/)){
        phoneError.innerHTML= "Only digits"; 
        return false;
    }
    phoneError.innerHTML =''
    return true; 
}
function validateSubject(){
    var sub = subject.value;
    var subjectError = document.getElementById('subject-error');
    if (sub.length == 0 ){
        subjectError.innerHTML = "Subject is required"; 
        return false;
    }
    subjectError.innerHTML =''; 
    return true;
}
function validateMsg(){
    var msgError = document.getElementById('msg-error');
    var msge = msg.value; 
    
    if(msge.length == 0){
        msgError.innerHTML = 'Message is required'; 
        return false;
    }
    msgError.innerHTML = "";
    return true;
}
function validateForm(){
    if (!validateName() || !validateEmail() || !validateSubject() || !validateMsg() || !validatePhone()){
        var submitError = document.getElementById("submit-error");
        submitError.style.display ='block';
        submitError.innerHTML ='Please fix error to submit'; 
        setTimeout(function(){submitError.style.display='none';}, 3000);
        return false; 
    }
    return true; 
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    if (validateForm()) {
        sendEmail();
        form.reset();
         return false;
    }
    
})

function closePopup(){
    popup.classList.remove("open-popup");
}
