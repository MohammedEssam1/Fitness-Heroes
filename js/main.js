var login = document.querySelectorAll('.login')
var loginLink1 = document.querySelector('#a1')
var loginLink2 = document.querySelector('#a2')
var loginSuccess = document.querySelector('#success')
var signupInputs = document.querySelectorAll('#signup input')
var signinInputs = document.querySelectorAll('#signin input')
var MyHome =document.getElementById('home')
var particles =document.getElementById('particles-js')
var signupBtn =document.querySelector('#signup button')
var signinBtn = document.querySelector('#signin button')
var homeLogOut = document.querySelector('#home button')
var alertDiv = document.querySelector('#signup .alert')
var alertDiv2 = document.querySelector('#signin .alert')
var dataArray =[]


if (localStorage.getItem('loginData')!=null){
    dataArray = JSON.parse(localStorage.getItem('loginData'))
}

loginLink1.addEventListener('click',function () {
    login[0].classList.add('d-none')
    login[1].classList.remove('d-none')
    alertDiv.classList.add('d-none')
    Clear();
})
loginLink2.addEventListener('click',function () {
    alertDiv2.classList.add('d-none')
    login[0].classList.remove('d-none')
    login[1].classList.add('d-none')
})

signupBtn.addEventListener('click',function () {
    if (validatEmail() &&  validatePassword()&& validateName() ){
    var myObj={
        pname:  signupInputs[0].value      ,
        email:   signupInputs[1].value       ,
        password:    signupInputs[2].value     
    }
    dataArray.push(myObj)
    localStorage.setItem('loginData',JSON.stringify(dataArray))
    loginSuccess.classList.remove('d-none')
    Clear() ;
}
})

signinBtn.addEventListener('click',function () {
    alertDiv2.classList.remove('d-none')
    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i].email==signinInputs[0].value && dataArray[i].password==signinInputs[1].value ) {
            alertDiv2.classList.add('d-none')
            login[0].classList.add('d-none')
            MyHome.classList.remove('d-none')
            particles.classList.add('d-none')
        }
    }
    Clear() 
}
)
homeLogOut.addEventListener('click',function () {
    MyHome.classList.add('d-none')
    particles.classList.remove('d-none')
    login[0].classList.remove('d-none')
}
)
function Clear() {
    signupInputs[0].value = ''
    signupInputs[1].value = ''
    signupInputs[2].value = ''
    signinInputs[0].value = ''
    signinInputs[1].value = ''
    signupInputs[2].classList.remove('is-invalid')
    signupInputs[0].classList.remove('is-invalid')
    signupInputs[1].classList.remove('is-invalid')
    signupInputs[2].classList.remove('is-valid')
    signupInputs[0].classList.remove('is-valid')
    signupInputs[1].classList.remove('is-valid')
}

function validatEmail() {
    var myRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if (myRegex.test(signupInputs[1].value)) {
        signupInputs[1].classList.add('is-valid')
        signupInputs[1].classList.remove('is-invalid')
        alertDiv.classList.add('d-none')
        return true;
    }
    else{
        alertDiv.classList.remove('d-none')
        signupInputs[1].classList.add('is-invalid')
        return false;
    }
}

function validateName() {
    if (signupInputs[0].value !='') {
        signupInputs[0].classList.add('is-valid')
        signupInputs[0].classList.remove('is-invalid')
        return true;
    }
    else{
        signupInputs[0].classList.add('is-invalid')
        return false;
    }
}

function validatePassword() {
    if (signupInputs[2].value!='') {
        signupInputs[2].classList.remove('is-invalid')
        signupInputs[2].classList.add('is-valid')
        return true;
    }
    else{
        signupInputs[2].classList.add('is-invalid')
        return false;
    }
}
signupInputs[0].addEventListener('blur',validateName)
signupInputs[1].addEventListener('blur',validatEmail)
signupInputs[2].addEventListener('blur',validatePassword)