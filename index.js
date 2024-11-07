const form = document.getElementById("form");
let error;

let message =  document.getElementById('message');





form.addEventListener('submit', (event) => {
    event.preventDefault();

    console.log("Still going");


    if (form.username.value == "" || form.email.value == "" || form.password.value == "" || form.confirm_password == "") {
        error = "All inputs are required";
        message.innerHTML = error;
        
    }
    else{
        if (form.password.value !== form.confirm_password.value) {
            error = "Your password and Confirm Password are not the same";
            message.innerHTML = error;
        }
        else{
            message.innerHTML = "";
            form.reset();
            localStorage.setItem('user', form.username.value);
            window.location.href = "/home.html";
        }
    }

});





