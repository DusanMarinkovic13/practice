// 3.Napisati program koji pronalazi najveci element na glavnoj dijagonali matrice.

/* var matrix_el = [
    [1, 2, 3, 0],
    [4, 0, 5, 6],
    [0, 7, 5, 9],
    [3, 5, 7, 3]
] */
var matrix_el = [
    [1, 2, 3, 0],
    [4, 10, 5, 6],
    [0, 7, 115, 9],
    [3, 5, 7, 33]
];

var big = matrix_el[0][0];
var red = 0;
var zbir = 0;

for (i = 0; i < matrix_el.length; i++) {
    zbir += matrix_el[i][i];
    if (matrix_el[i][i] > big) {
        big = matrix_el[i][i];
        red = i + 1;
    }
}
document.write("Zbir GLAVNE dijagonale je " + zbir + " , prosecna vrednost je " + (zbir / matrix_el.length) + " , a najveci element GLAVNE dijagonale je " + big + " i nalazi se u " + red + ". redu zadate matrice !!!");


// 4. Napisati program koji za proizvoljne n i m kreira i popunjava matricu čiji su elementi jednaki poziciji kolone.
n = 5;
m = 4;
var mat = [
    [],
    [],
    [],
    []
];

for (i = 0; i < m; i++) {
    for (y = 0; y < n; y++) {
        mat[i][y] = y + 1;
        document.write(mat[i][y] + " ");
    }
    document.write("<br>");
}

// 5.Data su dva niza. U oba niza nalaze se nazivi odredjenih vocaka. Potrebno je formirati treci niz koji ce da sadrzi sve elemente prvog i drugog niza.

var vocke1 = ["banana", "kruska", "jabuka", "tresnja", "jagoda"];
var vocke2 = ["tresnja", "sljiva", "jagoda", "tresnja", "kruska", ];
var x = vocke1.concat(vocke2).sort();

var noDuplicat = Array.from(new Set(x));
document.write(noDuplicat);
document.write("<br>");
document.write("<br>");
var automobili = [
    ["mercedes", "b"],
    ["opel", "d"],
    ["toyota", "d"],
    ["bmw", "b"],
    ["volvo", "d"],
    ["saab", "c"]
];
var d = [];
var b = [];
var c = [];
for (var i = 0; i < automobili.length; i++) {
    if (automobili[i][1] === "b") {
        b.push(automobili[i][0] + " ");

    } else if (automobili[i][1] === "d") {
        d.push(automobili[i][0] + " ");
    } else {
        c.push(automobili[i][0] + " ");
    }
}
document.write(b + "<br>");
document.write(d + "<br>");
document.write(c + "<br>");

document.write("<br>");
document.write("<br>");
//drugi zadatak
//1. koliki je prosek godina 2. ispis za svakog radnika godine 3. godine za jovu
var zaposleni = [
    ["Pera", "Jova", "Marko"],
    [28, 31, 19]
];
var zbir = 0;
var x = 0;
var jole = 0;
var y = 0;
for (var i = 0; i < zaposleni[0].length; i++) {
    document.write("Zaposleni " + zaposleni[0][i] + " ima " + zaposleni[1][x] + " godina!" + "<br>");
    zbir += zaposleni[1][x];
    x++;
}

while (y < zaposleni[0].length) {
    if (zaposleni[0][y] === "Jova") {
        //jole = zaposleni[1].indexOf(zaposleni[1][y]);
        jole = zaposleni[1][y];
    }
    y++;
}
document.write("Zaposleni Jova ima: " + jole + " godinu" + "<br>");
document.write("Prosek godina zaposlenih je: " + zbir / x + "<br>");

//document.write(zaposleni[0][i]+"<br>"); 
//document.write(zaposleni[0][i]+ " "+zaposleni[1][j]);
document.write("<br>");
var pr = [2, 5, 76, 87, 15, 18, 64, 11, 7, 99, 14];
var saDva = [];
var saTri = [];
var saOba = [];
var nedeljiv = [];
for (var i = 0; i < pr.length; i++) {
    if ((pr[i] % 3 === 0) && (pr[i] % 2 === 0)) {
        saOba.push(pr[i]);
        saTri.push(pr[i]);
        saDva.push(pr[i]);
    } else if (pr[i] % 3 === 0) {
        saTri.push(pr[i]);
    } else if (pr[i] % 2 === 0) {
        saDva.push(pr[i]);
    } else {
        nedeljiv.push(pr[i]);
    }
}
document.write(saDva + "<br>");
document.write(saTri + "<br>");
document.write(saOba + "<br>");
document.write(nedeljiv + "<br>");
document.write("<br>");