import {HTTP_client} from "../../services/http_client/http_client.js"

let http = new HTTP_client()

let state = ''

let obj = document.querySelector('#objects_obj')
let attr = document.querySelector('#objects_attractions')

obj.addEventListener('click', e => {
    obj.classList.add('active')
    attr.classList.remove('active')
    state = 'obj'
})

attr.addEventListener('click', e => {
    obj.classList.remove('active')
    attr.classList.add('active')
    state = 'atr'
})

function deleteRequest(e, id) {
    if (state === 'obj') {
        http.del_object(id).then(response => {
            console.log(response)
        })
    } else {
        http.del_attraction(id).then(response => {
            console.log(response)
        })
    }
}

function setHTML(item, templateData) {
    item.querySelector('#object_id').innerText = templateData.id
    item.querySelector('#object_name').innerText = templateData.name
    item.querySelector('#object_image').src = String(templateData.image)

    item.querySelector('.delete_button').addEventListener('click', (e) => {
        deleteRequest(e, templateData.id)
    })

    return item
}

function attraction_template_spawner(templateData) {
    const list = document.querySelector('.objects_container')
    let template = document.querySelector('#object_template')

    let item = template.content.cloneNode(true)

    item = setHTML(item, templateData)

    list.append(item)
}


function loadingObjects() {
    http.getAttractions().then(data => {
        data.forEach(attraction => {
            try {
                attraction.image = http.fileParser(attraction.image)
                attraction_template_spawner(attraction)
            } catch (e) {
                console.error(e)
            }
        })
    })
}

loadingObjects()


