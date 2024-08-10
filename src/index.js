const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
let arr = [];
let start = 0;
for (let i = 0; i < expr.length / 10; i++) {
    arr[i] = expr.slice(start, start + 10);
    start += 10;
}

console.log(arr)

function deleteZero (item) {
    return item.replace(/[0]+/, '');
}

let newArr = arr.map(deleteZero);

function replaceTen (item) {
    return item.replace(/10/g, '.');
}

let arrWithDot = newArr.map(replaceTen);

function replaceEleven (item) {
    return item.replace(/11/g, '-');
}

let arrWithDash = arrWithDot.map(replaceEleven);

function replaceAsterix (item) {
    return item.replace("**********", ' ');
}

let arrWithSpace = arrWithDash.map(replaceAsterix);

let endString = arrWithSpace.join(' ');

return endString;

}

module.exports = {
    decode
}