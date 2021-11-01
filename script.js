const pass = document.getElementById('password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;



const showInfo =()=>{
    console.log(pass.value);
    if (pass.value.length>minValue && letters.test(pass.value) && numbers.test(pass.value) && special.test(pass.value) ){
        p.textContent = "Very strong password"

    } else if( pass.value.length>minValue && letters.test(pass.value) && numbers.test(pass.value)){
        p.textContent = "Strong password"
    } else if(pass.value === ""){
        p.textContent = "Nie podałeś hasła..."
    }
    else{
    
        p.textContent= "Weak password"
    }
}


pass.addEventListener('input', showInfo)





