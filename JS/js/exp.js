var add = function(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw {
            name: 'TypeError',
            message: 'add needs numbers'
        };
    }
    return a + b;
    //document.write(a + b); ako ovo stoji umesto return a+b onda ispise rez na ekranu
}
var tryIt = function() {
    try {
        add(5, 6);
    } catch (e) {
        document.writeln(e.name + ': ' + e.message);
    }
}

tryIt();