import {HTTP_client} from
        "../../services/http_client/http_client.js"

let http = new HTTP_client()

function htmlData(data) {
    data.image = http.fileParser(data.image)

    document.querySelector('#obj_name').innerText = data.name
    document.querySelector('#obj_adress').innerText = data.address
    document.querySelector('#obj_price').innerText = data.price
    document.querySelector('#object_image').src = data.image
    document.querySelector('#object_description_string').innerText = data.description

    idOfAttraction = data.id

    setTagsToElement(data["tags"])
    loadButtonState()
}

function requestToGetObjects(id) {
    http.getSelfObjectData(id).then((data) => {
        object_data = data
        htmlData(data)
    })
}

function onPageLoad() {
    let ids = window.location.search
    let id = ids.split('=')[1]
    requestToGetObjects(id)
}

onPageLoad()