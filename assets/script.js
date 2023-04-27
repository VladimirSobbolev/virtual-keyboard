

// structure of page
const Classes = {
    'BODY': 'body',
    'CONTAINER': 'container',
    'KEY': 'key',
    'SYMBOL': 'key__symbol',
    'DIGIT': 'key__digit',
    'EN': 'key__en',
    'RU': 'key__ru',
    'BIG_KEY': 'key_big',
    'BIGGER_KEY': 'key_bigger',
    'ARROW': 'key__arrow',
    'EMPTY_EN': 'key__empty-en',
    'SPACE': 'key__space',
    'ACTIVE': 'active',
    'DISPLAY': 'display',
    'DISPLAY__WRAP': 'display__wrapper'
}

// digits
const DIGIT_CODE = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal'];
const DIGIT_KEY = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='];
const DIGIT_SECONDARY_KEY = ['~ `', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
const EN_UPPER_KEY = ['&#x2190;', '&#11134;', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{ [', ' } ]', '\| \\', 'Delete', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ': ;', '" \'', '&#8629;', '&#129093;', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<  ,', '< .', '? /', '&#129033;', '&#129093;', 'Control', 'Win', 'Alt', '', 'Alt', '&#129032;', '&#129035;', '&#129034;', 'Control'];
const RU_UPPER_KEY = ['Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\/', '', '', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '', 'Shift', '', 'Alt', '', '', '', 'AltGraph', '', '', '', 'Control'];
const KEY_CODE = ['Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
const ARROWS = ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'];
const EMPTY_EN = ['MetaLeft', 'CapsLock', 'Delete', 'ControlLeft', 'MetaLeft', 'Escape', 'AltLeft', 'Space', 'AltRight', 'ControlRight']
const BIG_BUTTON = ['Tab', 'Delete'];
const BIGGER_BUTTON = ['Backspace', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight'];

const BODY = document.querySelector('.' + Classes['BODY']);
const CONTAINER = createNewElement(BODY, 'CONTAINER');
const DISPLAY_WRAP = createNewElement(CONTAINER, 'DISPLAY__WRAP');
const DISPLAY = createNewElement(DISPLAY_WRAP, 'DISPLAY', 'textarea');
// DISPLAY.name = 'display';
// DISPLAY.rows = '5';

// remove tab event
window.onkeydown = evt => {
    if (evt.key === 'Tab' || evt.key === 'Alt') {
        evt.preventDefault();
    }
}





function createNewElement(parent, style, tag = 'div') {
    const element = document.createElement(tag)
    element.classList.add(Classes[style])
    parent.append(element)
    return element
}

// const DIGITS = new Array();
// const CONTAINER = createElement('div')
// console.log(BODY)

// create DIGITS keys

const DIGIT_BUTTONS = DIGIT_SECONDARY_KEY.map((el, index) => {
    let key = createNewElement(CONTAINER, 'KEY');
    key.setAttribute('myData', DIGIT_CODE[index]);
    let symbol = createNewElement(key, 'SYMBOL');
    symbol.append(el);
    let digit = createNewElement(key, 'DIGIT');
    digit.append(DIGIT_KEY[index])
    return key
})


// create ALPHABET keys

const ALPHABET_KEYS = EN_UPPER_KEY.map((el, index) => {

    let key = createNewElement(CONTAINER, 'KEY');
    key.setAttribute('myData', KEY_CODE[index]);
    if (BIG_BUTTON.includes(KEY_CODE[index])) {
        key.classList.add(Classes['BIG_KEY'])
    }

    if (BIGGER_BUTTON.includes(KEY_CODE[index])) {
        key.classList.add(Classes['BIGGER_KEY'])
    }

    if(KEY_CODE[index] === 'Space') {
        key.classList.add(Classes['SPACE'])
    }

    if (ARROWS.includes(KEY_CODE[index])) {
        // console.log(KEY_CODE[index])
        let arrowButton = createNewElement(key, 'ARROW');
        arrowButton.innerHTML = (EN_UPPER_KEY[index])
    } else if (EMPTY_EN.includes(KEY_CODE[index])) {
        let arrowButton = createNewElement(key, 'EMPTY_EN');
        arrowButton.innerHTML = (EN_UPPER_KEY[index])
    } else {
        let enLetter = createNewElement(key, 'EN');
        enLetter.innerHTML = el;
        let ruKey = createNewElement(key, 'RU');
        ruKey.append(RU_UPPER_KEY[index])
    }

})



// loggia
document.onkeydown = function (event) {
   let key = document.querySelector('[myData="' + event.code +'"]')
    key.classList.add(Classes['ACTIVE'])
    console.log(key)
}
document.onkeyup = function (event) {
    let key = document.querySelector('[myData="' + event.code +'"]')
    key.classList.remove(Classes['ACTIVE'])
}
// let button = document.querySelector('.key[key-code=KeyA]')
// console.log(button)
