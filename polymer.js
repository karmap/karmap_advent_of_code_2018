const fs = require("fs");
var inputFull = fs.readFileSync("day5input.txt", "utf8");

let input = 'wWuUJjXxqQrqQmKBzZbZzLlkWNqQntxXBZzMmbTwLlHhMQqiIFf';
let input3 = 'dabAcCaCBAcCcaDA';

let counter = 0;
let match = true;
let calls = 0;

function getPolymer(input) {
    let flag = true;
    let counter = 0;

    for (var i = 0; i <= input.length; i++) {
        if (input[i] != input[i + 1] && (
            input[i].toUpperCase() == input[i + 1] ||
            input[i].toLowerCase() == input[i + 1]
        )) {
            console.log('index: ' + i + " - length: " + input.length
                + " - next chars " + input[i - 1] + input[i + 2]
            );
            console.log(input.join('') + " " + input.length);
            //input[i] = input[i+1] = '-';
            //console.log(input.join('') + " " + input.length);
            //console.log('here 1');
            input.splice(i, 2);
            //console.log('here 2');
            //flag = true;
            i=0;
        }
    }
    return input.length;
}
console.time("dbsave");
console.log('result: ' + getPolymer(input.split('')));
console.timeEnd("dbsave");