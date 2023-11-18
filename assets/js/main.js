var slider = document.getElementById("slider");

    if (slider) {
        var currentSlide = 0;
        var slides = document.querySelectorAll(".slide");
        var interval = setInterval(nextSlide, 1000);

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlider();
        }

        function updateSlider() {
            var newPosition = -currentSlide * 5 + "%";
            slider.style.transform = "translateX(" + newPosition + ")";
        }
    } else {
        console.error("Cannot find an element with the ID 'slider'");
    }

const modal = document.querySelector('.js-message__button')
const mess = document.querySelector('.js-modal')
const close = document.querySelector('.js-close')

function showMess(){
    mess.classList.add('open')
}

function hideMess(){
    mess.classList.remove('open')
}

modal.addEventListener('click', showMess)
close.addEventListener('click', hideMess)

function checkInfo(){
    var first = document.getElementById('firstName').value
    var last = document.getElementById('lastName').value

    var email = document.getElementById('email').value
    var testEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

    var pass = document.getElementById('password').value

    if(first == ""){
        alert("First name is required")
    }    
    else if(last == ""){
        alert("Last name is required") 
    }
    else if(email == ""){
        alert("Email is required")
    }
    else if(!testEmail.test(email)){
        alert("Invalid email")
    }
    else if(pass == ""){
        alert("Password is required")
    }
    else{
        alert("Login success")
    }
}