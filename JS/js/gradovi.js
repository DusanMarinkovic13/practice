var drzave = { 1: "RS", 2: "RU", 3: "UK", 4: "ESP" };
var gradovi = [
    ["London", 3],
    ["Novi Sad", 1],
    ["Moskva", 2],
    ["Madrid", 4]
];
var kod = [];

function stateCity(drzave, gradovi) {
    for (i in gradovi) {
        document.write(gradovi[i][0] + " - " + drzave[gradovi[i][1]] + "<br>");
        var y = gradovi[i][0] + " " + " - " + " " + drzave[gradovi[i][1]];
        kod.push(y);
    }
    return kod;
}
document.write(stateCity(drzave, gradovi));



/* for (i in gradovi) {
    document.write(gradovi[i][0] + " " + i + " - " + drzave[gradovi[i][1]] + "<br>");
    var y = gradovi[i][0] + " - " + drzave[gradovi[i][1]];
    //drzava = drzave[gradovi[i][1]]
    kod.push(y);
}
document.write(kod); */
//var keyNames = Array(Object.keys(drzave));
//drzava = drzave[gradovi[i][1]]