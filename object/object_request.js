/**
 * НИЖЕПРЕДСТАВЛЕННЫЙ КОД СОЗДАН ДЛЯ ОБЪЕКТОВ
 *
 * Можно изменять по лицензии
 *  GZG Licence
 */


import {HTTP_client} from "../services/http_client/http_client.js"

let http = new HTTP_client()
let globalMaps = []

function getObjects() {
    http.getObject()
        .then((data) => {
            let outputData = []
            data.forEach(attraction => {
                try {
                    globalMaps.push(attraction.map)
                    attraction.image = http.fileParser(attraction.image)
                    outputData.push(attraction)
                } catch (e) {
                    console.error(e)
                }
            })

            objectsArray = outputData
            console.log(globalMaps)
            starterObjects()
        })
        .catch((error) => {
            console.error(error)
        })
}


getObjects()