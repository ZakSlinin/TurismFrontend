import {HTTP_client} from
        "../../services/http_client/http_client.js"

let http = new HTTP_client()

function htmlData(data) {
    data.image = http.fileParser(data.image)

    document.querySelector('#att_name').innerText = data.name
    document.querySelector('#att_adress').innerText = data.address
    document.querySelector('#att_price').innerText = data.price
    document.querySelector('#attention_image').src = data.image
    document.querySelector('#attention_description_string').innerText = data.description

    idOfAttraction = data.id
    loadButtonState()
}

function attentionRequest(id) {
    http.getSelfAttraction(id)
        .then((data) => {
            htmlData(data)
        })
}


function onPageLoad() {
    let ids = window.location.search
    let id = ids.split('=')[1]
    attentionRequest(id)
}

onPageLoad()