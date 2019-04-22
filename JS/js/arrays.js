var m = [
    [25, 35],
    [18, 51],
    [92, 44]
];
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 2; j++) {
        document.write(m[i][j] + " ");
    }
    document.write("<br>");
}
document.write("<br>");
var a = [5, 10, 3, 6, 22];
for (var i = 0; i < a.length; i++) {
    document.write(i + ": " + a[i] + "<br>");
}
document.write("duzina niza <b>a</b> je: " + a.length + " elemenata");

document.write("<br>");

var auto = new Array();
auto[0] = "Saab";
auto[1] = "Volvo";
auto[2] = "BMW";

for (var i = 0; i < auto.length; i++) {
    document.write(auto[i] + " ");
}
document.write("<br>");
document.write("<br>");
var auto1 = new Array(2);
auto1[0] = "Fiat";
auto1[1] = "Peugeot";
auto1[2] = "Citroen";
auto1[3] = "Skoda";

for (var i = 0; i < auto1.length; i++) {
    document.write(auto1[i] + " ");
}
auto1.sort();
document.write(auto1);
document.write("<br>");
document.write("<br>");
var auto2 = new Array("VW", "Ford", "Mercedes");
for (var i = 0; i < auto2.length; i++) {
    document.write(auto2[i] + " ");
}
document.write("<br>");
auto2[1] = "Opel";
for (var i = 0; i < auto2.length; i++) {
    document.write(auto2[i] + " ");
}
//Funkcija sort()
document.write("<br>");
document.write("<br>");
var niz = new Array("Marko", "Vesna", "Ana", "Stefan", "Darija", "Ivan");
document.write(niz + "<br>");
document.write(niz.sort() + "<br>");
document.write("<br>");
document.write("<br>");

function sortNumber(a, b) {
    return a - b;
}
var numeric = new Array(3, 44, 1111, 222);
document.write(numeric.sort() + "<br>"); //abecedno
document.write(numeric.sort(sortNumber) + "<br>"); //numericko sortiranje
document.write(numeric.reverse() + "<br>");
document.write("<br>");
document.write("<br>");
var niz1 = new Array("Marko", "Vesna", "Ana", "Stefan", "Darija", "Ivan");
document.write(niz1 + "<br>");
document.write(niz1.reverse() + "<br>");
document.write("<br>");
var niz2 = new Array("Marko", "Vesna", "Ana", "Stefan", "Darija", "Ivan");
document.write(niz2 + "<br>");
document.write(niz2.sort() + "<br>");
document.write(niz2.reverse() + "<br>");
document.write("<br>");

var brojevi = new Array(2, 4, 55, 66, 43, 5, 223, 46, 998, 65, 3, 76);

function sortRev(a, b) { //sortira obrnuto
    return b - a;
}
document.write(brojevi.sort(sortRev) + "<br>");
document.write("<br>");
//Funkcija concat()
var brojs = [1, 2, 3];
document.write(brojs + "<br>");
//brojs.concat(4,5);
document.write(brojs.concat(4, 5) + "<br>");
//brojs.concat([4,5]);
document.write(brojs.concat([4, 5]) + "<br>");
//brojs.concat([4,5],[6,7]);
document.write(brojs.concat([4, 5], [6, 7]) + "<br>");
//brojs.concat(4,[5,[6,7]]);
document.write(brojs.concat(4, [5, [6, 7]]) + "<br>");
document.write("<br>");
//Funkcija join()
var brojs1 = [1, 2, 3];
var s = brojs1.join();
document.write(s + "<br>");
s = brojs1.join("  |");
document.write(s + "<br>");
s = brojs1.join(" # ");
document.write(s + "<br>");
document.write("<br>");
//Funkcija slice()
var fruits1 = ["mango", "banana", "pineapple", "apple", "orange", "pear", "strawberry"];
var fr = fruits1.slice(1, 5);
document.write(fruits1 + "<br>");
document.write(fr + "<br>");
//Funkcija push() 
var fruits = ["mango", "banana", "pineapple", "apple", "orange"];
fruits.push("kiwi");
document.write(fruits + "<br>");
//Funkcija pop()
var fruits2 = ["mango", "banana", "pineapple", "apple", "orange"];
document.write(fruits2 + "<br>");
fruits2.pop();
document.write(fruits2 + "<br>");
//Funkcija toString()
var gr = [1, 2, 3];
var br = ["a", "b", "c"];
var grbr = [1, [2, "c"]];
document.write(gr.toString() + "<br>");
document.write(br.toString() + "<br>");
document.write(grbr.toString() + "<br>");