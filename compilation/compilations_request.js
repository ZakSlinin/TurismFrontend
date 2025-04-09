/**
 * НИЖЕПРЕДСТАВЛЕННЫЙ КОД СОЗДАН ДЛЯ КОЛЛЕКЦИЙ/ПОДБОРОК
 *
 * Можно изменять по лицензии
 *  GZG Licence
 */


import {HTTP_client} from "../services/http_client/http_client.js"

let http = new HTTP_client()

function setHTML(item, templateData, type) {
    item.querySelector('#object_id').innerText = templateData.id
    item.querySelector('#object_type').innerText = type
    item.querySelector('#object_name').innerText = templateData.name
    item.querySelector('#object_image').src = String(templateData.image)

    return item
}

function newElementByTemplate(data, type) {
    const list = document.querySelector('.attractions_div')
    let template = document.querySelector('#object_template')

    let item = template.content.cloneNode(true)

    item = setHTML(item, data, type)

    console.log(item)

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