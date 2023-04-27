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
    'DIGIT': 'key__digit',
    'EN': 'key__en',
    'RU': 'key__ru',
    'BIG_KEY': 'key_big'
}

// digits
// const DIGIT_CODE = ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0'];
const DIGIT_CODE = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal'];
const DIGIT_KEY = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='];
const DIGIT_SECONDARY_KEY = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
const EN_UPPER_KEY = ['&#x2190;','Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'L', ';', "'", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift', 'ArrowUp', 'Control', 'Meta', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];
const RU_UPPER_KEY = ['Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Delete', 'CapsLock', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Control', 'AltGraph', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];
const EN_CODE = ['Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'Escape', 'AltLeft', 'Space', 'AltRight', 'ArrowDown', 'ArrowRight', 'ControlRight'];
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

const DIGIT_KEYS = DIGIT_SECONDARY_KEY.map((el, index) => {
    let key = createNewElement(CONTAINER, 'KEY');
    let symbol = createNewElement(key, 'SYMBOL');
    symbol.append(el);
    let digit = createNewElement(key, 'DIGIT');
    digit.append(DIGIT_KEY[index])
    return key
})
console.log(DIGIT_KEYS);
console.log(DIGIT_SECONDARY_KEY)

const ALPHABET_KEYS = EN_UPPER_KEY.map((el, index) => {
    if (EN_CODE[index][0] !== 'K') {
    }
    let key = createNewElement(CONTAINER, 'KEY');
    console.log(EN_CODE[index][0] )
    if (EN_CODE[index][0] !== 'K') {
        key.classList.add(Classes['BIG_KEY'])
    }
    let enLetter = createNewElement(key, 'EN');
    enLetter.innerHTML = el;
    let ruKey = createNewElement(key, 'RU');
    ruKey.append(RU_UPPER_KEY[index])
})