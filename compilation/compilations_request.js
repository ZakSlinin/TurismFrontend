/**
 * НИЖЕПРЕДСТАВЛЕННЫЙ КОД СОЗДАН ДЛЯ КОЛЛЕКЦИЙ/ПОДБОРОК
 *
 * Можно изменять по лицензии
 *  GZG Licence
 */


import {HTTP_client} from "../services/http_client/http_client.js"

let http = new HTTP_client()

function getByNum(url) {
    http.getByURL(url).then((data) => {
        output = data
    })
}

function getCollections() {

    http.getCollections()
        .then((data) => {
            compilationArray = data;
            console.log(compilationArray)
            const compilation = compilationArray[currentCompilation];

            const compilationDataUrl = compilation.data[0];

            const image = document.getElementById('compilation_image');
            getByNum(compilationDataUrl['image']);

            setCompilation(compilationArray)

            let correctUrl = http.fileParser(output.image);
            image.src = correctUrl
        })
}

getCollections()
