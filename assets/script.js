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
  'DISPLAY-WRAP': 'display__wrapper',
  'SELECTED-KEY': 'key__selected'
}

const DIGIT_CODE = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal'];
const DIGIT_KEYS = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='];
const DIGIT_SHIFT_KEYS = ['~ `', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
const DIGIT_SHIFT_KEYS_RU = ['ё', '!', '"', '№', ';', '%', ':', '? ', '*', '(', ')', '_', '+']
const EN_ALPHABET_KEYS = ['&#x2190;', '&#11134;', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{ [', ' } ]', '\| \\', 'Delete', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ': ;', '" \'', '&#8629;', '&#129093;', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<  ,', '< .', '? /', '&#129033;', '&#129093;', 'Control', 'Win', 'Alt', '', 'Alt', '&#129032;', '&#129035;', '&#129034;', 'Control'];
const RU_ALPHABET_KEYS = ['Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\/', '', '', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '', 'Shift', '', 'Alt', '', '', '', 'AltGraph', '', '', '', 'Control'];
const ALPHABET_KEY_CODE = ['Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
const ARROW_KEYS = ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'];
const EMPTY_EN = ['MetaLeft', 'CapsLock', 'Delete', 'ControlLeft', 'MetaLeft', 'Escape', 'AltLeft', 'Space', 'AltRight', 'ControlRight']
const BIG_BUTTON = ['Tab', 'Delete'];
const BIGGER_BUTTON = ['Backspace', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight'];

const BODY = document.querySelector('.' + Classes['BODY']);
const CONTAINER = createNewElement(BODY, 'CONTAINER');
const DISPLAY_WRAP = createNewElement(CONTAINER, 'DISPLAY-WRAP');
const DISPLAY = createNewElement(DISPLAY_WRAP, 'DISPLAY', 'p');



const SHIFT_LETTERS = {
  Backquote: ['~', '`', 'Ё', 'ё'],
  Digit1: ['!', '1', '!', '1'],
  Digit2: ['@', '2', '"', '2'],
  Digit3: ['#', '3', '№', '3'],
  Digit4: ['$', '4', ';', '4'],
  Digit5: ['%', '5', '%', '5'],
  Digit6: ['^', '6', ':', '6'],
  Digit7: ['&', '7', '?', '7'],
  Digit8: ['*', '8', '*', '8'],
  Digit9: ['(', '9', '(', '9'],
  Digit0: [')', '0', ')', '0'],
  Minus: ['_', '-', '_', '-'],
  Equal: ['+', '=', '+', '='],
  Backspace: ['&#x2190;', '&#x2190;', '&#x2190;', '&#x2190;'],
  Tab: ['&#11134;', '&#11134;', '&#11134;', '&#11134;'],
  KeyQ: ['Q', 'q', 'Й', 'й'],
  KeyW: ['W', 'w', 'Ц', 'й'],
  KeyE: ['E', 'e', 'У', 'у'],
  KeyR: ['R', 'r', 'К', 'к'],
  KeyT: ['T', 't', 'Е', 'е'],
  KeyY: ['Y', 'y', 'Н', 'н'],
  KeyU: ['U', 'u', 'Г', 'г'],
  KeyI: ['I', 'i', 'Ш', 'ш'],
  KeyO: ['O', 'o', 'Щ', 'щ'],
  KeyP: ['P', 'p', 'З', 'з'],
  BracketLeft: ['{', '[', 'Х', 'х'],
  BracketRight: ['}', ']', 'Ъ', 'ъ'],
  Backslash: ['|', '\\', '/', '\\'],
  Delete: ['delete', 'delete', 'delete', 'delete'],
  CapsLock: ['caps', 'caps', 'caps', 'caps'],
  KeyA: ['A', 'a', 'Ф', 'ф'],
  KeyS: ['S', 's', 'Ы', 'ы'],
  KeyD: ['D', 'd', 'В', 'в'],
  KeyF: ['F', 'f', 'А', 'а'],
  KeyG: ['G', 'g', 'П', 'п'],
  KeyH: ['H', 'h', 'Р', 'р'],
  KeyJ: ['J', 'j', 'О', 'о'],
  KeyK: ['K', 'k', 'Л', 'л'],
  KeyL: ['L', 'l', 'Д', 'д'],
  Semicolon: [':', ';', 'Ж', 'ж'],
  Quote: ['"', '\'', 'Э', 'э'],
  Enter: ['&#8629;', '&#8629;', '&#8629;', '&#8629;'],
  ShiftLeft: ['&#129093;', '&#129093;', '&#129093;', '&#129093;'],
  KeyZ: ['Z', 'z', 'Я', 'я'],
  KeyX: ['X', 'x', 'Ч', 'ч'],
  KeyC: ['C', 'c', 'С', 'с'],
  KeyV: ['V', 'v', 'М', 'м'],
  KeyB: ['B', 'b', 'И', 'и'],
  KeyN: ['N', 'n', 'Т', 'т'],
  KeyM: ['M', 'm', 'Ь', 'ь'],
  Comma: ['<', ',', 'Б', 'б'],
  Period: ['>', '.', 'Ю', 'ю'],
  Slash: ['?', '/', ',', '.'],
  ArrowUp: ['&#129033;', '&#129033;', '&#129033;', '&#129033;'],
  ShiftRight: ['&#129093;', '&#129093;', '&#129093;', '&#129093;'],
  ControlLeft: ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
  MetaLeft: ['Win', 'Win', 'Win', 'Win'],
  AltLeft: ['Alt', 'Alt', 'Alt', 'Alt'],
  Space: [' ', ' ', ' ', ' '],
  AltRight: ['Alt', 'Alt', 'Alt', 'Alt'],
  ArrowLeft: ['&#129032;', '&#129032;', '&#129032;', '&#129032;'],
  ArrowDown: ['&#129035;', '&#129035;', '&#129035;', '&#129035;'],
  ArrowRight: ['&#129034;', '&#129034;', '&#129034;', '&#129034;'],
  ControlRight: ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl']
}

function createNewElement(parent, style, tag = 'div') {
  const element = document.createElement(tag)
  element.classList.add(Classes[style])
  parent.append(element)
  return element
}

// create DIGITS keys
const SYMBOLS = new Array();
const DIGIT_BUTTONS = DIGIT_SHIFT_KEYS.map((el, index) => {
  let key = createNewElement(CONTAINER, 'KEY');
  key.setAttribute('myData', DIGIT_CODE[index]);
  let symbol = createNewElement(key, 'SYMBOL');
  symbol.append(el);
  SYMBOLS.push(symbol)
  let digit = createNewElement(key, 'DIGIT');
  digit.append(DIGIT_KEYS[index])
  return key
})

// create ALPHABET keys
const ALPHABET_KEYS = EN_ALPHABET_KEYS.map((el, index) => {

  let key = createNewElement(CONTAINER, 'KEY');
  key.setAttribute('myData', ALPHABET_KEY_CODE[index]);
  if (BIG_BUTTON.includes(ALPHABET_KEY_CODE[index])) {
    key.classList.add(Classes['BIG_KEY'])
  }

  if (BIGGER_BUTTON.includes(ALPHABET_KEY_CODE[index])) {
    key.classList.add(Classes['BIGGER_KEY'])
  }

  if (ALPHABET_KEY_CODE[index] === 'Space') {
    key.classList.add(Classes['SPACE'])
  }

  if (ARROW_KEYS.includes(ALPHABET_KEY_CODE[index])) {
    let arrowButton = createNewElement(key, 'ARROW');
    arrowButton.innerHTML = (EN_ALPHABET_KEYS[index])
  } else if (EMPTY_EN.includes(ALPHABET_KEY_CODE[index])) {
    let arrowButton = createNewElement(key, 'EMPTY_EN');
    arrowButton.innerHTML = (EN_ALPHABET_KEYS[index])
  } else {
    let enLetter = createNewElement(key, 'EN');
    enLetter.innerHTML = el;
    let ruKey = createNewElement(key, 'RU');
    ruKey.append(RU_ALPHABET_KEYS[index])
  }
  return key
})

// loggia

// remove tab and alt  events
window.onkeydown = event => {
  if (event.key === 'Tab' || event.key === 'Alt') {
    event.preventDefault();
  }
}


// choose language

const EN_BUTTONS = Array.from(document.querySelectorAll('.key__en'));
const RU_BUTTONS = Array.from(document.querySelectorAll('.key__ru'));

EN_BUTTONS.map(button => {
  button.classList.toggle(Classes['SELECTED-KEY'])
})

function changeButtonsLanguages() {
  EN_BUTTONS.map(button => button.classList.toggle(Classes['SELECTED-KEY']));
  RU_BUTTONS.map(button => button.classList.toggle(Classes['SELECTED-KEY']));
  isEnglish ? isEnglish = false : isEnglish = true;
  //
  // DIGIT_SHIFT_KEYS_RU
  if (isEnglish) {
    SYMBOLS.map((el, index) => el.innerHTML = DIGIT_SHIFT_KEYS[index]);
  } else {
    SYMBOLS.map((el, index) => el.innerHTML = DIGIT_SHIFT_KEYS_RU[index]);
  }
}

// changing display
let isEnglish = true;
let keyBoardState = isEnglish ? 1 : 3;

// 0 is shift_en, 1 is en, 2 is shift_ru, 3 is ru
function changeLanguage() {

  let combo = DISPLAY.innerHTML.slice(-7);
  if (combo === 'CtrlAlt' && 'lAltAlt') {
    changeButtonsLanguages()
  }
}

// key events
document.onkeydown = function (event) {

  console.log(event.code)
  let key = document.querySelector(`[myData=${event.code}]`)
  key.classList.add('active');
  let letter = SHIFT_LETTERS[event.code][keyBoardState];
  DISPLAY.innerHTML += letter;
  changeLanguage();
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    keyBoardState = isEnglish ? 0 : 2;
  } else {
    keyBoardState = isEnglish ? 1 : 3;
  }

}

document.onkeyup = function (event) {
  if (!(event.code === 'ShiftLeft' || event.code === 'ShiftRight')) {

    let key = document.querySelector(`[myData=${event.code}]`)
    key.classList.remove('active');
    key = document.querySelector('[myData = ShiftLeft]')
    key.classList.remove('active');
    key = document.querySelector('[myData = ShiftRight]')
    key.classList.remove('active');
  } else {
    let key = document.querySelector(`[myData=${event.code}]`)
    key.classList.remove('active');

    key = document.querySelector('[myData = ShiftLeft]')
    key.classList.add('active');
    key = document.querySelector('[myData = ShiftRight]')
    key.classList.add('active');
  }
}

// click events
CONTAINER.onclick = function (event) {

  let key = event.target.closest('.key');
  if (key) {
    let keyCode = key.getAttribute('mydata');
    let shift = document.querySelector('[myData = ShiftLeft]');
    let shiftR = document.querySelector('[myData = ShiftRight]');
    let letter = SHIFT_LETTERS[keyCode][keyBoardState];

    DISPLAY.innerHTML += letter;
    changeLanguage();
    console.log(keyCode)
    if (keyCode === 'ShiftLeft' || keyCode === 'ShiftRight') {
      keyBoardState = isEnglish ? 0 : 2;
      shiftR.classList.add('active');
      shift.classList.add('active');
    } else {
      keyBoardState = isEnglish ? 1 : 3;
      shift.classList.remove('active');
      shiftR.classList.remove('active');
    }
  }
}

// CAPSLOCK
// function capslock(keyCode) {
//   if (keyCode === CapsLock)
// }


