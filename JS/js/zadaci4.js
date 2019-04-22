//import fs from 'fs';
var fs = require('fs');

{
    'Marc Jacobsen': [
        { name: 'wafle iron', price: '80', quantity: '2' },
        { name: 'knife', price: '20', quantity: '4' },
        { name: 'blender', price: '350', quantity: '3' }
    ],
    'Nikita Smith': [
        { name: 'wafle iron', price: '85', quantity: '3' },
        { name: 'pot small', price: '50', quantity: '2' },
        { name: 'knife', price: '35', quantity: '3' }
    ]
};

var output = fs.readFileSync('data.txt', 'utf8')
    .trim()
    .split('\n')
    .map(line => line.split('\t'))
    .reduce((costumers, line) => {
        costumers[line[0]] = costumers[line[0]] || []
        costumers[line[0]].push({
            name: line[1],
            price: line[2],
            quantity: line[3]
        });
        return costumers
    }, {});
// document.write('output', JSON.stringify(output, null, 2));
console.log('output', JSON.stringify(output, null, 2));