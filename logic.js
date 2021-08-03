let name=document.getElementById('name');
let email=document.getElementById('email');
let phoneno=document.getElementById('phoneno');

let checkname=document.getElementById('checkname');
let checkemail=document.getElementById('checkemail');
let checkphone=document.getElementById('checkphone');

name.addEventListener('blur',()=>{
    let putname=/^[a-z]([a-z]){1,20}\s([a-z]){1,20}$/i;
    if(putname.test(name.value))
    {
        checkname.classList.remove('invalid-feedback');
        name.classList.remove('is-invalid');
        checkname.classList.add('valid-feedback');
        name.classList.add('is-valid');
        checkname.innerHTML="Correct name putted";
    }
    else
    {
        checkname.classList.remove('valid-feedback');
        name.classList.remove('is-valid');
        checkname.classList.add('invalid-feedback');
        name.classList.add('is-invalid');
        checkname.innerHTML="Please put a valid Full Name";
    }
})

email.addEventListener('blur',()=>{
    let putemail=/^([_\-\.a-z0-9]+)@([a-z0-9]+)\.([a-z]){2,7}$/i;
    if(putemail.test(email.value))
    {
        checkemail.classList.remove('invalid-feedback');
        email.classList.remove('is-invalid');
        checkemail.classList.add('valid-feedback');
        email.classList.add('is-valid');
        checkemail.innerHTML="Correct email address given";
    }
    else
    {
        checkemail.classList.remove('valid-feedback');
        email.classList.remove('is-valid');
        checkemail.classList.add('invalid-feedback');
        email.classList.add('is-invalid');
        checkemail.innerHTML="Please put a valid Email-id";
    }
})

phoneno.addEventListener('blur',()=>{
    let putphoneno=/^([0-9]){10}$/i;
    if(putphoneno.test(phoneno.value))
    {
        checkphone.classList.remove('invalid-feedback');
        phoneno.classList.remove('is-invalid');
        checkphone.classList.add('valid-feedback');
        phoneno.classList.add('is-valid');
        checkphone.innerHTML="Correct phone number given";
    }
    else
    {
        checkphone.classList.remove('valid-feedback');
        phoneno.classList.remove('is-valid');
        checkphone.classList.add('invalid-feedback');
        phoneno.classList.add('is-invalid');
        checkphone.innerHTML="Please put a valid phone no";
    }
})