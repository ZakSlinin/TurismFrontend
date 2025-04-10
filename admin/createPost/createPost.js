import {HTTP_client} from "../../services/http_client/http_client.js"


let selOfType = document.querySelector('.selectorOfType')

document.querySelector('.selectorOfType').addEventListener('input', (e) => {
    select_changed(e)
})

function select_changed(e) {
    if (selOfType.value === 'Достопримечательности') {
        document.querySelector('.tags_container').style.display = 'none'
    } else {
        document.querySelector('.tags_container').style.display = 'grid'
    }
}


document.querySelector('#createBTN').addEventListener('click', (e) => {
    console.log(e)
    createNewObject()
})

let currFile = ''

document.querySelector('#image_of_post').addEventListener('input', (e) => {
    const input = e.target
    const file = input.files[0]

    console.log(file)

    currFile = file
})

function createNewObject() {
    let name = document.querySelector('#name_of_post').value
    let image = currFile
    let address = document.querySelector('#address_of_post').value
    let price = document.querySelector('#price_of_post').value
    let description = document.querySelector('#description_of_post').value

    // let map = JSON.stringify(glbalUserPoint.at(-1))

    let map = JSON.stringify({})

    if (selOfType.value === 'Объекты') {
        createObject(name, address, description, map, image, price)
    } else {
        createAttraction(name, address, description, map, image, price)
    }
}

let http = new HTTP_client()

function createObject(name, address, description, map, image, price) {
    let time = '1'
    let tags = JSON.stringify(getCurrentTags())

    let formData = new FormData()
    formData.append("name", name)
    formData.append("address", address)
    formData.append("description", description)
    formData.append("map", map)
    formData.append("image", image)
    formData.append("price", price)
    formData.append("time", time)
    formData.append("tags", tags)

    http.postObjects(formData)
        .then((data) => {
            console.log(data)
            window.location.reload()
        })
}

function createAttraction(name, address, description, map, image, price) {
    let time = '1'
    let tags = JSON.stringify(['NaN'])

    let formData = new FormData()
    formData.append("name", name)
    formData.append("address", address)
    formData.append("description", description)
    formData.append("map", map)
    formData.append("image", image)
    formData.append("price", price)
    formData.append("time", time)
    formData.append("tags", tags)

    http.postAttractions(formData)
        .then((data) => {
            console.log(data)
            window.location.reload()
        })
}