const pass = document.getElementById('password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;



const showInfo =()=>{
    
    if (pass.value.length>minValue && letters.test(pass.value) && numbers.test(pass.value) && special.test(pass.value) ){
        p.textContent = "Bardzo silne hasło"
        p.style.color = "lime"

    } else if( pass.value.length>minValue && letters.test(pass.value) && numbers.test(pass.value)){
        p.textContent = "Silne hasło"
        p.style.color = "yellow"
    } else if(pass.value === ""){
        p.textContent = "Nie podałeś hasła..."
    }
    else{
    
        p.textContent= "Słabe hasło"
        p.style.color = "tomato"
    }
}


pass.addEventListener('input', showInfo)






