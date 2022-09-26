function login() {
    var user = document.getElementById("user").value;
    var userEmail = document.getElementById("userEmail").value;
    var userPassword = document.getElementById("userPassword").value;

    if(user && userEmail && userPassword){
        localStorage.setItem("user",user);
        localStorage.setItem("userEmail",userEmail);
        sessionStorage.setItem("userPassword",userPassword);

        window.open("./logininfo.html");

        document.getElementById("user").value = "";
        document.getElementById("userEmail").value = "";
        document.getElementById("userPassword").value = "";
    }else{
        alert("Los datos del formulario no pueden estar vacios");
    }

}