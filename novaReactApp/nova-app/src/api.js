const ZaposleniAPI = {
    zaposleni: [
    { number: 1, name: "Pera Peric", position: "1" },
    { number: 2, name: "Mika Mikic", position: "2" },
    { number: 3, name: "Pera Mikic", position: "2" },
    { number: 4, name: "Mika Peric", position: "3" },
    { number: 5, name: "Petar Petrovic", position: "3" },
    { number: 6, name: "Mika Petrovic", position: "4" }
    ],
    all: function() { return this.zaposleni},
    get: function(id) {
    const iszaposleni = p => p.number === id
    return this.zaposleni.find(iszaposleni)
    } }
    export default ZaposleniAPI