function saberi() {
    x = document.getElementById("x").value;
    y = document.getElementById("y").value;
    var sumT = parseFloat(x) + parseFloat(y);
    //document.getElementById("demo").innerHTML = "Zbir brojeva je: " +sumT;
    if (!isNaN(sumT)) {
        document.getElementById("demo").innerHTML = sumT;
    }
}

function oduzmi() {
    x = document.getElementById("x").value;
    y = document.getElementById("y").value;
    var sumM = parseFloat(x) - parseFloat(y);
    //document.getElementById("demo").innerHTML = "Zbir brojeva je: " +sumT;
    if (!isNaN(sumM)) {
        document.getElementById("demo").innerHTML = sumM;
    }
}

function pomnozi() {
    x = document.getElementById("x").value;
    y = document.getElementById("y").value;
    var sumP = parseFloat(x) * parseFloat(y);
    //document.getElementById("demo").innerHTML = "Zbir brojeva je: " +sumT;
    if (!isNaN(sumP)) {
        document.getElementById("demo").innerHTML = sumP;
    }
}

function podeli() {
    x = document.getElementById("x").value;
    y = document.getElementById("y").value;
    var sumPD = parseFloat(x) / parseFloat(y);
    //document.getElementById("demo").innerHTML = "Zbir brojeva je: " +sumT;
    if (!isNaN(sumPD)) {
        document.getElementById("demo").innerHTML = sumPD;
    }
}

function procenat() {
    x = document.getElementById("x").value;
    y = document.getElementById("y").value;
    var sumPR = parseFloat(x) / 100 * parseFloat(y);
    //document.getElementById("demo").innerHTML = "Zbir brojeva je: " +sumT;
    if (!isNaN(sumPR)) {
        document.getElementById("demo").innerHTML = sumPR;
    }
}
 /* function pokazi(){
    document.getElementById("bodi").innerHTML = 
} */ 