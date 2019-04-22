var a = 0;
var b = 1;
document.write(a + "<br>");
document.write(b + "<br>");
var novi = 0;
while (novi < 1000) {
    novi = a + b;
    document.write(novi + "<br>");
    a = b;
    b = novi;
}
document.write("<br>");
document.write("<br>");
var num = 0;
var sum = 0;
do {
    sum += num;
    num++;
    document.write(sum + "<br>");
} while (sum < 1000);
// document.write(sum +"<br>");
document.write(num + "<br>");
document.write("<br>");
var x = -7;
var y = 1;
var z = 0;
// document.write("vrednost y je " + y + " a vrednost z je " + z +"<br>"); 
while (z < 1) {
    z = x + y;
    document.write("vrednost <b>Y</b> je   " + y + "  a vrednost <b>Z</b> je   " + z + "<br>");
    y++;
}
document.write("<br>");
for (var i = 0; i < 10; i++) {
    document.write("<b>vrednost brojača je </b>  " + i + " !<br>");
}
document.write("<br>");
for (var i = 9; i >= 0; i--) {
    document.write("<b>vrednost brojača je </b>  " + i + " !<br>");
}
document.write("<br>");
/* var d = new Date();
var n = d.getTime();
for(var i = 0; i<360; i++){
    document.write(i + " " + n+"<br>");
} */
document.write("<br>");
for (var i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        document.write(i + "<br>");
    }
}
document.write("<br>");

var dex = { name: "xd", lName: "he he", age: 23, adress: "lnjjdh" };
var x;
var txt = "";
for (x in dex) {
    txt += dex[x] + " ";
}
document.write(txt + "<br>");
document.write("<br>");
var i = 0;
for (i = 0; i <= 10; i++) {
    if (i == 3) {
        continue;
    }
    document.write("broj: " + i);
    document.write("<br>");
}
document.write("<br>");
var i = 0;
for (i = 0; i <= 10; i++) {
    if (i == 3) {
        break;
    }

    document.write("broj: " + i);
    document.write("<br>");
}
document.write("<br>");
document.write("<br>");
var niz = ["saab", "volvo", "mercedes", "audi", "vw"];
var x;
for (x in niz) {

    document.write(niz[x] + "<br>");
    // document.write(niz[x]+ " ");
}
document.write("<br>");
var niz = ["saab", "mercedes", "audi", "volvo", "vw"];
for (var i in niz) {
    if (niz[i] == "volvo") {
        break;
    }
    document.write(niz[i] + "<br>");
}
document.write("<br>");
var niz = ["saab", "mercedes", "volvo", "audi", "vw"];
for (var i in niz) {
    if (niz[i] == "volvo") {
        continue;
    }
    document.write(niz[i] + "<br>");
}
document.write("<br>");
for (var i = 0; i < 20; i++) {
    if (i % 3 == 0) {
        document.write(i + "<br>");
    }
}
document.write("<br>");
document.write("<br>");
var x = 0;
var y = 1;
var counter = 2;
document.write(x + "<br>");
document.write(y + "<br>");
var novi = 0;
while (counter < 21) {
    novi = x + y;
    document.write(novi + "<br>");
    x = y;
    y = novi;
    counter++;
}
document.write("<br>");
document.write("<br>");
var temp = 0;
var sumaNiza = 0;
for (var i = 0; i < 162; i++) {
    sumaNiza += i;
    temp++;
}
document.write(sumaNiza + "<br>");
document.write(temp + "<br>");
document.write(sumaNiza / temp);
document.write("<br>");
document.write("<br>");
//fibonaci Sale zadatak
var x = 0;
var y = 1;
var counter = 0;
var novi = 0;
while (counter < 50) {
    novi = x + y;
    x = y;
    y = novi;
    counter++;
    if (counter == 35) {
        document.write(novi + "<br>");
        break;
    }
    // document.write(novi+"<br>");

}
// document.write(counter);

document.write("<br>");
document.write("<br>");

var niz = [1, 3, 4, 8, 41, 6, 5, 11, 21, 54, 5, 14, 87];
var indexNiza = 0;
var test = false;
for (var i = 0; i < niz.length; i++) {
    if (niz[i] == 15) {
        test = true;
        document.write("U nizu postoji broj 5 i ima index: " + i + "<br>");
    }
}
if (test == false) {
    document.write("ne postoji trazeni broj: ");
}
document.write("<br>");
document.write("<br>");

//Bojanov primer
var niz = [1, 2, 3, 8, 4, 6, 5, 11];
var x = 5;
var p = niz.indexOf(x);
if (p > -1)
    document.write("postoji na mestu broj " + (p + 1))
else
    document.write("ne postoji")
    // -----------------------------------------
document.write("<br>");
document.write("<br>");