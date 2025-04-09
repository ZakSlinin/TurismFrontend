// import {PopUp} from 'https://gvinses.github.io/JSPop/library/popUp.js'
//
// let body = document.querySelector('body')
// let popup = document.querySelector('#testPopup')
//
// let testPopUp = new PopUp(
//     {
//         'origin': body,
//         'template': popup,
//         'display': 'flex',
//         'animations': {
//             'show': 'show',
//             'hide': 'hide'
//         }
//     },
//     [{
//         'origin': '#closePopupButton',
//         'event': 'click',
//         'func': (event) => {
//             testPopUp.self.style.background = 'red'
//             testPopUp.hide()
//         }
//     },
//         {
//             'origin': '#secondPopupButton',
//             'event': 'click',
//             'func': (event) => {
//                 testPopUp.self.style.background = `green`
//             }
//         }]
// )
//
// testPopUp.load()                                    // method of class to "render" every functions methods and styles (MUST BE BEFORE show popup)
//
// document.querySelector('#show-popup').addEventListener('click', (e) => {
//     testPopUp.show()                                // showing popup after clicking on the button
// })