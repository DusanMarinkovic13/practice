/* window.setTimeout(function() {
    location.href = "http://blic.rs";
}, 5000); */

//drugi primer - pravi novi div sa zadatim parametrima
/* (function(x, y, c, boja) {
    var blok = document.createElement("div");
    blok.innerHTML = "Novi DIV blok";
    blok.onclick = function() {
        blok.style.width = x + "px";
        blok.style.height = y + "px";
        blok.style.borderWidth = c + "px";
        blok.style.borderColor = boja;
    };
    document.body.appendChild(blok);
})(250, 100, 3, "#160606"); */

(function(x, y) {
    var blok = document.createElement("section");
    blok.innerHTML = "Novi id blok";
    blok.onclick = function() {
        blok.style.width = x + "px";
        blok.style.height = y + "px";
    };
    document.body.appendChild(blok);
})(250, 100);

//treci primer - na klik izbacuje pozdravnu poruku
/* function displayMessage(){
    alert("Hello World!");
} */

//cetvrti primer - confirm
/* function dispConfirm(){
    var name = confirm("pritisni dugme")
    if(name==true){
        document.write("pritisnuli ste OK dugme");
    }else{
        document.write("pritisnuli ste CANCEL dugme");
    }
} */
//peti primer - prompt
/* function dispPrompt(){
    var name = prompt("Molim vas, unesite vase ime","")
    if(name!=null&&name!=""){
        document.write("Zdravo "+name+"! Kako ste danas?")
    }else{
        document.write("Niste uneli nista!")
    }
} */
// sesti primer
/* function myFun(txt){
    alert(txt);
} */