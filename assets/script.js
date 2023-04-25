// console.log("ворк")
// document.onkeydown = function (event) {
//     console.log("нажал")
//     console.log(event)
// }
//
// document.onkeyup = function (event) {
//     console.log("отпустил")
//     console.log(event)
// }

// structure of page
const Classes = {
    'BODY': 'body',
    'CONTAINER': 'container'
}


function createNewElement (parent, style, tag = 'div') {
    const element = document.createElement(tag)
    element.classList.add(Classes[style])
    parent.append(element)
    return element
}
const BODY = document.querySelector('.' + Classes['BODY']);
const CONTAINER = createNewElement(BODY, 'CONTAINER');

console.log(CONTAINER)
// const CONTAINER = createElement('div')
console.log(BODY)