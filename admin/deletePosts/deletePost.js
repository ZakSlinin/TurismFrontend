import {HTTP_client} from "../../services/http_client/http_client.js"

let http = new HTTP_client()

let state = 'obj'

let obj = document.querySelector('#objects_obj')
let attr = document.querySelector('#objects_attractions')

obj.addEventListener('click', e => {
    obj.classList.add('active')
    attr.classList.remove('active')
    state = 'obj'

    document.querySelector('.objects_container')
        .innerHTML = `<div class="objects_container"></div>`

    loadingObjects()
})

attr.addEventListener('click', e => {
    obj.classList.remove('active')
    attr.classList.add('active')
    state = 'atr'

    document.querySelector('.objects_container')
        .innerHTML = `<div class="objects_container"></div>`

    loadingObjects()
})


function deleteRequest(e, id) {
    if (state === 'obj') {
        http.delObject(id).then(response => {
            console.log(response)
        })
    } else {
        http.delAttraction(id).then(response => {
            console.log(response)
        })
    }
}

function setHTML(item, templateData) {
    item.querySelector('#object_id').innerText = templateData.id
    item.querySelector('#object_name').innerText = templateData.name
    item.querySelector('#object_image').src = String(templateData.image)

    item.querySelector('.delete_button').addEventListener('click', (e) => {
        console.log(e.target, templateData.id)
        e.target.closest('.object_container').style.display = 'none'
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
    if (state === 'obj') {
        http.getObject().then(data => {
            data.forEach(attraction => {
                try {
                    attraction.image = http.fileParser(attraction.image)
                    attraction_template_spawner(attraction)
                } catch (e) {
                    console.error(e)
                }
            })
        })
    } else {
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
}

loadingObjects()