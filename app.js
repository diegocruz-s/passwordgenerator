    //Taking variables
let currentValue = document.querySelector('.currentValue');
let caracteresPassword = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"!@#$%&*(-)+=';
const inputNumCaract = document.querySelector('.inputNumCaract');
const backValue = document.querySelector('.backValue');
const nextValue = document.querySelector('.nextValue');
const btnPassword = document.querySelector('.btnPassword');
const password = document.querySelector('.password');
const copyPassword = document.querySelector('.copyPassword')


    //Events
inputNumCaract.addEventListener('change', ()=>{
    currentValue.textContent = inputNumCaract.value;
});
backValue.addEventListener('click', ()=>{
    inputNumCaract.value--;
    currentValue.textContent = inputNumCaract.value;
});
nextValue.addEventListener('click', ()=>{
    inputNumCaract.value++;
    currentValue.textContent = inputNumCaract.value;
});
btnPassword.addEventListener('click', ()=>{
    const createdPassword = generatePassword();
    console.log(createdPassword);
    hidePassword(createdPassword);
});
copyPassword.addEventListener('mouseover', ()=>{
    copyPassword.textContent = "Clique aqui para copiar sua senha";
});
copyPassword.addEventListener('mouseout', ()=>{
    copyPassword.textContent = "...";
});
copyPassword.addEventListener('click', ()=>{
    navigator.clipboard.writeText(password.textContent);
    setTimeout(()=>{
        alert('Senha copiada com sucesso!!!');
    }, 500);
});


    //Functions
function generatePassword(){
    let inputValueCaract = inputNumCaract.value;
    let newPassword = "";
    for(let i=1;i<=inputValueCaract;i++){
        let randomNumber = Math.floor(Math.random()*caracteresPassword.length)
        newPassword += caracteresPassword.charAt(randomNumber);
    }
    return newPassword;
}

function hidePassword(createdPassword){
    password.textContent = createdPassword;
    document.querySelector('.hidePassword').style.display = 'block';
    copyPassword.style.display = 'block';
}


