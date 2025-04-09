/**
 * НИЖЕПРЕДСТАВЛЕННЫЙ КОД СОЗДАН ДЛЯ ОЗНАКОМЛЕНИЯ
 *
 * НЕОБХОДИМО БУДЕТ ПЕРЕДЛАТЬ НИЖЕПРЕДСТАВЛЕННЫЙ КОД
 *  ДЛЯ ОБЪЕКТОВ
 *
 * Можно изменять по лицензии
 *  GZG Licence
 */


import {HTTP_client} from "../services/http_client/http_client.js"

let http = new HTTP_client()

function changeImages(data) {
    let outputData = []
    data.forEach(attraction => {
        try {
            attraction.image = http.fileParser(attraction.image)
            outputData.push(attraction)
        } catch (e) {
            console.error(e)
        }
    })
    attractionsArray = outputData
}

function getAttractions() {
    http.getAttractions()
        .then((data) => {
            changeImages(data)
            starterAttractions()
        })
        .catch((error) => {
            console.error(error)
        })
}


getAttractions()