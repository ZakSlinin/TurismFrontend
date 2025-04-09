/**
 * НИЖЕПРЕДСТАВЛЕННЫЙ КОД СОЗДАН ДЛЯ КОЛЛЕКЦИЙ/ПОДБОРОК
 *
 * Можно изменять по лицензии
 *  GZG Licence
 */


import {HTTP_client} from "../services/http_client/http_client.js"

let http = new HTTP_client()

function getCollections() {

    http.getCollections()
        .then((data) => {
            compilationArray = data;
            console.log(compilationArray)

        })

    // http.getObject()
    //     .then((data) => {
    //         objectsArray = data
    //         console.log(data)
    //
    //         starterObjects()
    //         // attraction_template_spawner(attractionsArray[0])
    //         // attraction_template_spawner(attractionsArray[1])
    //     })
    //     .catch((error) => {
    //         console.error(error)
    //     })
}

getCollections()