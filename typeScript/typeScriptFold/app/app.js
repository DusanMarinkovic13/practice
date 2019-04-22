var title = "Hello World!";
var iAm = "Bobby";
console.log(title + " I am " + iAm);
var number = 1;
if (true) {
    var number_1 = 20;
}
console.log(number);
var a;
var b;
var c;
var d;
var e;
var f;
var crvena = 0;
var zelena = 1;
var plava = 2;
var Boje;
(function (Boje) {
    Boje[Boje["crvena"] = 0] = "crvena";
    Boje[Boje["zelena"] = 1] = "zelena";
    Boje[Boje["plava"] = 2] = "plava";
})(Boje || (Boje = {}));
var bojaSlova = Boje.plava;
var names = ["Ivan", "Bojan", "Mitar", "Sasa"];
var numbers = [1, 2, 3, 4];
//let names: Array = ["Ivan", "Bojan", "Mitar", "Sasa"];
//let objects: Array<Object> = [complex, complex];
//vraca rec
function getName() {
    return "Marko Markovic";
}
console.log(getName());
//F-ja vraa kompleksni objekat
function getComplex() {
    return {
        _name: "Marko Markovic",
        _age: 20
    };
}
console.log(getComplex());
//funkcija ne vraca nista
function nothing() {
    var addition = 10 + 30;
}
console.log(nothing());

//# sourceMappingURL=app.js.map
