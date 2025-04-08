function setTemplates(template) {
    template.innerHTML = attract
    return template
}

function attraction_template_spawner(templateData) {
    const list = document.querySelector('.attractions_container')
    let template = document.querySelector('#attraction_template')
    template = setTemplates(template)

    const item = template.content.cloneNode(true)

    item.querySelector('#attraction_id').innerText = 0

    list.append(item)
}

attraction_template_spawner(null)
attraction_template_spawner(null)

window.onscroll = function (e) {
    if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
        attraction_template_spawner(null)
        attraction_template_spawner(null)
    }
}


localStorage.setItem('current_attractions', [])


function setPostData(event) {
    let attractionContainer = event.target.closest('.attraction')
    let sysData = attractionContainer.querySelector('#attraction_id').innerText
    let possibleTargets = ['IMG', 'H3']

    if (possibleTargets.includes(event.target.tagName)) {
        window.open(`selfAttention/selfAttention.html?id=${sysData}`, '_blank')
    }
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
        console.log(currentStorage)
        localStorage.setItem('current_attractions', currentStorage.join(','))
    } else {
        sysData.classList.add('active_add_button')
        sysData.innerText = 'Убрать'

        let currentStorage = String(localStorage.getItem('current_attractions')).split(',')
        currentStorage.push(idOfAttraction)
        console.log(currentStorage)
        localStorage.setItem('current_attractions', currentStorage.join(','))
    }
}