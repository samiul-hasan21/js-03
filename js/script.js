var password= document.getElementById('password');
var password_eye=document.getElementById('password_eye');
var toggle_bar = document.getElementById('menu_toggle_bar');
var modeIcon = document.getElementById('mode');






password_eye.addEventListener('click' , function () {
    if (password.type === 'password') {
        password.type ='text';
        password_eye.classList.add('fa-eye')
        password_eye.classList.remove('fa-eye-slash')
    }else {
        password.type ='password'
        password_eye.classList.remove('fa-eye')
        password_eye.classList.add('fa-eye-slash')
    }
})
toggle_bar.addEventListener('click', function () {
    document.getElementById('sideMenu').classList.toggle('active')
})
modeIcon.addEventListener('click',function(){
    document.body.classList.toggle('darkmode');
    if(modeIcon.classList.contains('fa-moon')){
        modeIcon.classList.add('fa-sun');
        modeIcon.classList.remove('fa-moon');
    }
    else{
        modeIcon.classList.add('fa-moon');
        modeIcon.classList.remove('fa-sun');
    }
})
