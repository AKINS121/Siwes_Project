const form = document.querySelector("form")

form.addEventListener('submit', event =>{
    event.preventDefault();
   const fullname = document.querySelector("[fullname = 'fullname']").value.trin();
   const username = document.querySelector("[username ='username']").value.trin();
   const email = document.querySelector("[email ='email']").value.trin();
   const password = document.querySelector("[password ='password']").value.trin();

   const errors = [];

   if (username === '')
    errors.push("username can't be blank");
  if (email === '')
    errors.push("Email can't be blank");
  if (password === '')
    errors.push("password can't be blank");
  if (password != confirmpassword)
    errors.push("password must match");

    if(errors.length > 0){
        for(let i = 0; i < errors.length; i++){
            toastify({
                text: errors[i],
                duration: 4000,
                gravity: "top",
                position: "center",
                style:{
                    background:"#bacbae"
                }
            }).showToast();
        }
    }
    else{
        toastify({
            text: "success❤ !",
            duration: 4000,
            gravity: "center",
            style:{
                background: "#4babae"
            }
        }).showToast();
    }
})