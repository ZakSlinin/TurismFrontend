let attractionsArray = []
let currentAttractions = 0

function setTemplates(template) {
    template.innerHTML = attract
    return template
}

function setHTML(item, templateData) {
    item.querySelector('#attraction_id').innerText = templateData.id
    item.querySelector('#attraction_name').innerText = templateData.name
    item.querySelector('#attraction_adress').innerText = templateData.address
    item.querySelector('#attraction_price').innerText = templateData.price + 'Р'
    item.querySelector('#attraction_time').innerText = String(templateData.time).split(' ')[0]
    item.querySelector('#attraction_image').src = String(templateData.image)

    setAddStatus(item.querySelector('.attraction_button'), templateData.id)

    return item
}

function attraction_template_spawner(templateData) {
    const list = document.querySelector('.attractions_container')
    let template = document.querySelector('#attraction_template')
    template = setTemplates(template)

    let item = template.content.cloneNode(true)

    item = setHTML(item, templateData)

    // TODO
    //  IMAGES add

    list.append(item)
    currentAttractions += 1
}

function starterAttractions() {
    while (currentAttractions < 4) {
        attraction_template_spawner(attractionsArray[currentAttractions])
    }
}

function checkAttraction_isCanBeCreated() {
    if (currentAttractions <= attractionsArray.length) {
        attraction_template_spawner(attractionsArray[currentAttractions])
    }
}

window.onscroll = function (e) {
    if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
        checkAttraction_isCanBeCreated()
        checkAttraction_isCanBeCreated()
    }
}

function setPostData(event) {
    let attractionContainer = event.target.closest('.attraction')
    let sysData = attractionContainer.querySelector('#attraction_id').innerText
    let possibleTargets = ['IMG', 'H3']

    if (possibleTargets.includes(event.target.tagName)) {
        window.open(`selfAttention/selfAttention.html?id=${sysData}`, '_blank')
    }
}


if (localStorage.getItem('current_attractions') === null) {
    localStorage.setItem('current_attractions', [])
}

function changeButton(e) {
    let attractionContainer = event.target.closest('.attraction')
    let sysData = attractionContainer.querySelector('.attraction_button')
    let idOfAttraction = attractionContainer.querySelector('#attraction_id').innerText

    if (sysData.classList.contains('active_add_button')) {
        sysData.classList.remove('active_add_button')
        sysData.innerText = 'Добавить'

        let currentStorage = String(localStorage.getItem('current_attractions')).split(',')
        currentStorage.splice(currentStorage.indexOf(idOfAttraction), 1)
        localStorage.setItem('current_attractions', currentStorage.join(','))
    } else {
        sysData.classList.add('active_add_button')
        sysData.innerText = 'Убрать'

        let currentStorage = String(localStorage.getItem('current_attractions')).split(',')
        currentStorage.push(idOfAttraction)
        localStorage.setItem('current_attractions', currentStorage.join(','))
    }
}

let currentStorage = String(localStorage.getItem('current_attractions')).split(',')

function setAddStatus(data, id) {
    if (checkIsInLS(id)) {
        data.classList.add('active_add_button')
        data.innerText = 'Убрать'
    } else {
        data.classList.remove('active_add_button')
        data.innerText = 'Добавить'
    }
}

function checkIsInLS(id) {
    if (currentStorage.includes(String(id))) {
        return true
    }

    return false
}