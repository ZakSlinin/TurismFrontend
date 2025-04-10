let objectsArray = []
let currentObject = 0

function setTemplates(template) {
    template.innerHTML = object_template
    return template
}

function setTag(template) {
    template.innerHTML = tag_template
    return template
}

function setTagsToTemplate(tags, element) {
    const listData = element.querySelector('.tags_container')
    let currTags = 0
    let isAll = false

    tags.forEach(tag => {
        currTags += 1

        let tagTemp = document.querySelector('#tag_template')
        tagTemp = setTag(tagTemp)

        const item = tagTemp.content.cloneNode(true)

        if (currTags > 2) {
            if (isAll) {
                return
            } else {
                item.querySelector('#tag_name').innerText = 'Больше...'
                listData.append(item)
                isAll = true
                return
            }
        }

        item.querySelector('#tag_name').innerText = tag
        listData.append(item)

    })

}

function attraction_template_spawner(templateData) {
    const list = document.querySelector('.objects_container')
    let template = document.querySelector('#object_template')
    template = setTemplates(template)

    const item = template.content.cloneNode(true)

    item.querySelector('#object_id').innerText = templateData.id
    item.querySelector('#object_name').innerText = templateData.name
    item.querySelector('#object_image').src = templateData.image

    setTagsToTemplate(templateData["tags"], item)
    list.append(item)
    currentObject += 1
}

function starterObjects(arr) {
    while (currentObject < 4) {
        attraction_template_spawner(objectsArray[currentObject])
    }
}

function checkAttraction_isCanBeCreated() {
    if (currentObject <= objectsArray.length) {
        attraction_template_spawner(objectsArray[currentObject])
    }
}

window.onscroll = function (e) {
    if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
        checkAttraction_isCanBeCreated()
        checkAttraction_isCanBeCreated()
    }
}

function setPostData(event) {
    let objectContainer = event.target.closest('.object')
    let sysData = objectContainer.querySelector('#object_id').innerText

    window.open(`selfObject/selfObject.html?id=${sysData}`, '_blank')
}


localStorage.setItem('current_attractions', [])
// setTags('.tags')

//
// function loadTags() {
//     let tags = document.querySelector('.tags')
//
//     // localStorage.setItem('current_attractions', 'null')
//
//     if (String(localStorage.getItem('current_tags')) === 'null' ||
//         String(localStorage.getItem('current_tags')) === 'undefined' ||
//         String(localStorage.getItem('current_tags')) === ''
//     ) {
//         localStorage.setItem('current_tags', [])
//         tags.querySelector('#all_tag').classList.add('active')
//     } else {
//         tags.querySelector('#all_tag').classList.remove('active')
//
//         let currentStorage = String(localStorage.getItem('current_tags')).split(',').splice(1)
//
//         currentStorage.forEach((tag) => {
//             if (tag !== 'null' || tag !== 'undefined') {
//                 try {
//                     let elemnt = document.getElementsByClassName(tag)
//                     elemnt[0].classList.add('active')
//                 } catch (e) {
//                     console.error(e)
//                 }
//             }
//         })
//     }
// }