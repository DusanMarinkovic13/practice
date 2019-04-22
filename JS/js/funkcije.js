function zbir(a,b){
    var rezultat = a+b;
    return rezultat;
    //return a+b;
}
document.write(zbir(8,9)+ "<br>");
/* 
var x = zbir(4,6);
document.write(x);
*/
function fun(a,b){
    if(b){//isto kao: if(b != undefined)
        return a+b;   
    }
    return a+1;
}
var y = fun(5);
document.write(y+ "<br>");


function myFun(){
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    var sumT = parseFloat(a) + parseFloat(b);
    //document.getElementById("demo").innerHTML = "Zbir brojeva je: " +sumT;
    if(!isNaN(sumT)){
        document.getElementById("demo").innerHTML = "Zbir brojeva je: " +sumT;
    }
}

/*
funkciji zbir2 prosledjujemo dva numericka parametra. U funkciji su uvecani za po jedan
Stvarni parametri 'd' i 'f' sadrze vrednosti primitivnog tipa
*/
function zbir2(a,b){
    a++;
    b++;
    return a+b;
}
var d = 5;
var f = 10;
var rezZ = zbir2(d,f);
document.write(rezZ+ "<br>"+d+ "<br>"+f+ "<br>");
console.log(rezZ,d,f);

function zbir3(a,b){
    a[0]++;
    b[0]++;
    return a[0]+b[0];
}
var s = [5];
var c = [10];
var rezult = zbir3(s,c);
document.write(rezult+ "<br>"+s+ "<br>"+c+ "<br>");
console.log(rezult,s,c);

var prvi = 10;
function prva(){
    var druga = 5;
    console.log(prvi+druga);
}
prva();
//console.log(prvi+druga);

//primer dva
var xGlobal = 10;
function treca(){
    var yInside = 5;
    var xGlobal = 20;
    console.log(yInside + xGlobal);
}
treca();

function globalna(){
    console.log("pozvana globalna funkcija");
}
function nadFun(){
    lokal(1);//pozivamo f-ju lokal()pre deklaracije
    function lokal(param){ //deklaracija funkcije lokal
        console.log(param);
    }
    lokal(2); // pozivamo f-ju lokal() posle deklaracije
    function mini(){ //podfunkcija mini()
        lokal(3);//unutar podfunkcije takodje mozemo pozvati f-ju lokal()- sve je to i dalje unutar nadFun()
        globalna();// f-ja globalna()je svuda vazeca
    }
}
lokal(4);//ovo nece raditi - lokal() nema vazenje van svoje nadfunkcije




