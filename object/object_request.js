/**
 * НИЖЕПРЕДСТАВЛЕННЫЙ КОД СОЗДАН ДЛЯ ОБЪЕКТОВ
 *
 * Можно изменять по лицензии
 *  GZG Licence
 */


import {HTTP_client} from "../services/http_client/http_client.js"

let http = new HTTP_client()

function getObjects() {
    http.getObject()
        .then((data) => {
            let outputData = []
            data.forEach(attraction => {
                try {
                    attraction.image = http.fileParser(attraction.image)
                    outputData.push(attraction)
                } catch (e) {
                    console.error(e)
                }
            })

            objectsArray = outputData
            starterObjects()
        })
        .catch((error) => {
            console.error(error)
        })
}


getObjects()