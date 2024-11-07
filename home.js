let user = document.getElementById("show");



const FindUser = () => {
    const found = localStorage.getItem('user');

    if (found !== "") {
        console.log(found);
        user.innerHTML = found;
    }
    else{
       console.log("Rubbish");
       
    }
    
}

FindUser();