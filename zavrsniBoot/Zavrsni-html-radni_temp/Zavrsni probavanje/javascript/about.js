function run(){
    var username = localStorage.getItem("username");
    var email = localStorage.getItem("email");
    document.getElementById("gost").innerHTML = ''+ username+ ''+ email;
}