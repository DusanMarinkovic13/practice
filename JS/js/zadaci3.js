function myFun(p) {
    p = document.getElementById("p").value;
    if ((p % 3 === 0) && (p % 2 === 0)) {
        //document.getElementById("p").value = "Zadati broj " + p + " je deljiv i sa tri i sa dva!";
        document.getElementById("demo").innerHTML = "Zadati broj " + p + " je deljiv i sa tri i sa dva!";
        //document.write("Zadati broj " + p + " je deljiv i sa tri i sa dva!");
    } else if (p % 3 === 0) {
        //document.getElementById("p").value = "Zadati broj " + p + " je deljiv sa tri!";
        document.getElementById("demo").innerHTML = "Zadati broj " + p + " je deljiv sa tri!";
        // document.write("Zadati broj " + p + " je deljiv sa tri!");
    } else if (p % 2 === 0) {
        //document.getElementById("p").value = "Zadati broj " + p + " je deljiv sa dva!";
        document.getElementById("demo").innerHTML = "Zadati broj " + p + " je deljiv sa dva!";
        //document.write("Zadati broj " + p + " je deljiv sa dva!");
    } else {
        //document.getElementById("p").value = "Zadati broj " + p + " nije deljiv ni sa tri ni sa dva!";
        document.getElementById("demo").innerHTML = "Zadati broj " + p + " nije deljiv ni sa tri ni sa dva!";
        //document.write("Zadati broj " + p + " nije deljiv ni sa tri ni sa dva!");
    }
}
document.write("<br>");

var triple = function(x) {
    return x * 3;
}
var rez = triple;
document.write(rez(7));
document.write("<br>");
document.write("<br>");
var animals = [
    { names: "as", species: "dog" },
    { names: "beta", species: "cat" },
    { names: "ajax", species: "dog" },
    { names: "jenny", species: "cow" },
    { names: "lea", species: "cat" },
    { names: "don", species: "dog" },
    { names: "donald", species: "duck" },
    { names: "mickey", species: "mouse" },
    { names: "virginia", species: "cow" },
    { names: "daisy", species: "duck" },
];
/*
URADJENO SA FOR PETLJOM
var dogs = [];
for (var i = 0; i < animals.length; i++) {
    if (animals[i].species === "dog") {
        dogs.push(animals[i].name);
    }
}
document.write(dogs + "<br>");
*/
//URADJENO SA FUNKCIJOM FILTER(filter vraca samo true ili false da li objekat treba da je u novom nizu, map ga transformise i moze da pristupi properties-ima)

/* var dogs = animals.filter(function(animal) {
    return animal.species === "dog"
}); 
VRATI CE [Object object, Object object, Object object]
*/
var isDog = function(animal) {
    return animal.species === "dog";
    /* if (animal.species === "dog") {
        return animal.names;
    } */

};
var dogs = animals.filter(isDog);
var dogName = dogs.map(function(dog) {
    return dog.names;
});
var isCow = function(animal) {
    return animal.species === "cow";
};
var cows = animals.filter(isCow);
var cowName = cows.map(function(cow) {
    return cow.names;
});

var animNames = animals.map((animal) => animal.names);
document.write("Imena pasa su: " + dogName + "<br>");
document.write("Imena krava su: " + cowName + "<br>");
document.write(animNames + "<br>");
document.write("<br>");

var orders = [
    { amount: 240 },
    { amount: 340 },
    { amount: 480 },
    { amount: 800 },
    { amount: 560 }
];
//sa FOR petljom
/* var totalAmount = 0;
for (var i = 0; i < orders.length; i++) {
    totalAmount += orders[i].amount;
}
------------------------------------------- */
// sa funkcijom REDUCE
var totalAmount = orders.reduce(function(sum, order) {
    return sum + order.amount;
}, 0);
//ARROW function ECMA6
/*var totalAmount = orders.reduce((sum, order) =>sum + order.amount, 0)  */
document.write(totalAmount + "<br>");