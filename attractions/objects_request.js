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

function getAttractions() {
    http.getAttractions()
        .then((data) => {
            attractionsArray = data
            console.log(data)

            starterAttractions()
            // attraction_template_spawner(attractionsArray[0])
            // attraction_template_spawner(attractionsArray[1])
        })
        .catch((error) => {
            console.error(error)
        })
}


getAttractions()