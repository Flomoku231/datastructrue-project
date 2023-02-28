// JavaScript Logic

// Variables
const loginForm = document.querySelector('.login__form');
const loginUsername = document.querySelector('.username--input');
const loginReg = document.querySelector('.reg--input');
const loginUsernameError = document.getElementById('login__username--error');
const loginRegError = document.getElementById('login__reg--error');


loginForm.addEventListener('submit', function(e){
    e.preventDefault();

    if(loginUsername.value == ''){
        loginUsernameError.innerHTML = 'Please enter username'
    }
    if (loginReg.value !== '12345'){
        loginRegError.innerText = 'Invaled Reg number'
    } 
    else if (loginUsername.value !== 'Emmanuel'){
        loginUsernameError.innerHTML = 'Username does not exist'

    }
     
    else if(loginReg.value == ''){
        loginRegError.innerHTML = 'Reg number is required'

    }
   
    
    else{
        console.log('Success');
        loginReg.value = '';
        loginUsername.value = '';
        loginRegError.innerHTML = '';
        loginUsernameError.innerHTML = '';

        Redirect();

    }

   
})

const Redirect = ()=>{
    window.location.replace('stack-queue-mis.html');
    return false;
}