/**
 * НИЖЕПРЕДСТАВЛЕННЫЙ КОД СОЗДАН ДЛЯ КОЛЛЕКЦИЙ/ПОДБОРОК
 *
 * Можно изменять по лицензии
 *  GZG Licence
 */


import {HTTP_client} from "../services/http_client/http_client.js"

let http = new HTTP_client()
let output = []

function setHTML(item, templateData, type) {
    item.querySelector('#object_id').innerText = templateData.id
    item.querySelector('#object_type').innerText = type
    item.querySelector('#object_name').innerText = templateData.name
    item.querySelector('#object_image').src = String(templateData.image)

    item.querySelector('.delete_button').addEventListener('click', (e) => {
        if (type === 'obj') {
            let currentStorage = String(localStorage.getItem('current_object')).split(',')
            currentStorage.splice(currentStorage.indexOf(templateData.id), 1)
            localStorage.setItem('current_object', currentStorage.join(','))
        } else {
            let currentStorage = String(localStorage.getItem('current_attractions')).split(',')
            currentStorage.splice(currentStorage.indexOf(templateData.id), 1)
            localStorage.setItem('current_attractions', currentStorage.join(','))
        }
    })

    return item
}

function newElementByTemplate(data, type) {
    const list = document.querySelector('.objects_container')
    let template = document.querySelector('#object_template')

    let item = template.content.cloneNode(true)

    item = setHTML(item, data, type)

    list.append(item)
}

function requester(data, type) {
    console.log(data)
    if (type === 'obj') {
        http.getSelfObjectData(data).then((otpt) => {
            newElementByTemplate(otpt, type)
        })
    } else {
        http.getSelfAttraction(data).then((otpt) => {
            newElementByTemplate(otpt, type)
        })
    }
}

function getCollections() {
    let objs = localStorage.getItem('current_object')
    let atts = localStorage.getItem('current_attractions')

    let currentObjStorage = String(objs).split(',').splice(1)

    currentObjStorage.forEach((object) => {
        if (object !== 'null' || object !== 'undefined') {
            try {
                requester(object)
            } catch (e) {
                console.error(e)
            }
        }
    })

    let currentAttsStorage = String(atts).split(',').splice(1)

    currentAttsStorage.forEach((object) => {
        if (object !== 'null' || object !== 'undefined') {
            try {
                requester(object)
            } catch (e) {
                console.error(e)
            }
        }
    })
}

getCollections()