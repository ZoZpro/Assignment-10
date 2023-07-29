

var myName = document.querySelector('#userName');
var myEmail = document.querySelector('#userEmail');
var myPassword = document.querySelector('#userPassword');
var btnSign = document.querySelector('#btnSignUp')
var btnLogin = document.querySelector('#btnLogin')
var signAcc = document.querySelector('.signAcc')
var logAcc = document.querySelector('.logAcc')
var inputInvalid = document.querySelector('#inputInvalid')
var incorrectInput = document.querySelector('#incorrectInput')
var userAdded = document.querySelector('#userAdded')
var emailExists = document.querySelector('#emailExists')
var signUp = document.querySelector('.sign-up')
var signIn = document.querySelector('.sign-in')


var loginContainer;

if (localStorage.getItem('userList') != null) {
    loginContainer = JSON.parse(localStorage.getItem('userList'))
} else {
    loginContainer = [];
}

function addUser() {

    dublicatedUser()

    var userLogin = {
        userName: myName.value,
        userEmail: myEmail.value,
        userPassword: myPassword.value
    }
    loginContainer.push(userLogin);
    localStorage.setItem('userList', JSON.stringify(loginContainer))
    inputInvalid.classList.add('d-none')


}

function checkUser() {
    for (var i = 0; i < loginContainer.length; i++) {

        if (myEmail.value === loginContainer[i].userEmail && myPassword.value === loginContainer[i].userPassword) {
            sessionStorage.setItem('userName', loginContainer[i].userName);
            window.location.href = 'login.html';

        } else {
            incorrectInput.classList.remove('d-none');

        }
    }

}

function dublicatedUser() {

    for (var i = 0; i < loginContainer.length; i++) {
        if (myName.value === loginContainer[i].userName && myEmail.value === loginContainer[i].userEmail && myPassword.value === loginContainer[i].userPassword) {

            emailExists.classList.remove('d-none')
            userAdded.classList.add('d-none')

        } else {
            emailExists.classList.add('d-none')
            userAdded.classList.remove('d-none')

        }

    }
}

function clearUserData() {
    myName.value = '';
    myEmail.value = '';
    myPassword.value = '';
}




btnLogin.addEventListener('click', function () {

    if (myEmail.value == "" || myPassword.value == "") {

        inputInvalid.classList.remove('d-none')
    } else {
        inputInvalid.classList.add('d-none')
        checkUser();
    }

})

btnSign.addEventListener('click', function () {


    if (myName.value !== "" && myEmail.value !== "" && myPassword.value !== "") {
        addUser();
    } else {
        inputInvalid.classList.remove('d-none')
        userAdded.classList.add('d-none')
    }


})

signUp.addEventListener('click', function () {

    myName.classList.remove('d-none');
    btnSign.classList.remove('d-none')
    btnLogin.classList.add('d-none')
    signAcc.classList.add('d-none')
    logAcc.classList.remove('d-none')
    inputInvalid.classList.add('d-none')
    incorrectInput.classList.add('d-none')
    userAdded.classList.add('d-none')
    emailExists.classList.add('d-none')
    clearUserData();


})


signIn.addEventListener('click', function () {
    myName.classList.add('d-none')
    btnLogin.classList.remove('d-none')
    btnSign.classList.add('d-none')
    logAcc.classList.add('d-none')
    signAcc.classList.remove('d-none')
    inputInvalid.classList.add('d-none')
    userAdded.classList.add('d-none')
    emailExists.classList.add('d-none')
    clearUserData();

})





