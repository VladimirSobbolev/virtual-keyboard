// console.log("ворк")
// document.onkeydown = function (event) {
//     console.log("нажал")
//     console.log(event)
// }
//
let digits = [];
document.onkeyup = function (event) {

    // console.log(event.key)
    digits.push(event.key)
    console.log(digits)
}

// structure of page
const Classes = {
    'BODY': 'body',
    'CONTAINER': 'container',
    'KEY': 'key',
    'SYMBOL': 'key__symbol',
    'DIGIT': 'key__digit'
}

// digits
const DIGIT_CODE = ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0'];
const DIGIT_KEY = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='];
const SYMBOL_CODE = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal'];
const SYMBOL_KEY = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
// remove tab event
window.onkeydown = evt => {
    if (evt.key == 'Tab') {
        evt.preventDefault();
    }
}


function createNewElement (parent, style, tag = 'div') {
    const element = document.createElement(tag)
    element.classList.add(Classes[style])
    parent.append(element)
    return element
}
const BODY = document.querySelector('.' + Classes['BODY']);
const CONTAINER = createNewElement(BODY, 'CONTAINER');
// const DIGITS = new Array();
console.log(CONTAINER)
// const CONTAINER = createElement('div')
console.log(BODY)

// create DIGITS keys

const DIGIT_KEYS = SYMBOL_KEY.map((el, index) => {
    let key = createNewElement(CONTAINER, 'KEY');
    let symbol = createNewElement(key, 'SYMBOL');
    symbol.append(el)
    let digit = createNewElement(key, 'DIGIT');
    digit.append(DIGIT_KEY[index])
})