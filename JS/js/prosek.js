var ocene = [8, 7, 6, 9, 8, 10, 8];
var ime_prez = ["Marko", "Markovic"];


function prosek(ocene, ime_prez) {
    var zbir = 0;
    for (i in ocene) {
        zbir += ocene[i];
    }
    return "Student " + ime_prez[0] + " " + ime_prez[1] + " ima prosek ocena " + zbir / ocene.length;
}
document.write(prosek(ocene, ime_prez));