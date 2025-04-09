let object_data = []

// let tags_var = ['еда', 'не еда', 'другое']

function setTag(template) {
    template.innerHTML = tag_template
    return template
}

function setTagsToElement(tags) {
    const listData = document.querySelector('.object_tags')

    tags.forEach(tag => {
        let tagTemp = document.querySelector('#tag_template')
        tagTemp = setTag(tagTemp)

        const item = tagTemp.content.cloneNode(true)

        item.querySelector('#tag_name').innerText = tag
        listData.append(item)
    })
}


let idOfAttraction

function changeButton(e) {
    let sysData = document.querySelector('.add_object')

    if (sysData.classList.contains('active_add_button')) {
        sysData.classList.remove('active_add_button')
        sysData.innerText = 'Добавить'

        let currentStorage = String(localStorage.getItem('current_object')).split(',')
        currentStorage.splice(currentStorage.indexOf(idOfAttraction), 1)
        localStorage.setItem('current_object', currentStorage.join(','))
    } else {
        sysData.classList.add('active_add_button')
        sysData.innerText = 'Убрать'

        let currentStorage = String(localStorage.getItem('current_object')).split(',')
        currentStorage.push(idOfAttraction)
        localStorage.setItem('current_object', currentStorage.join(','))
    }
}

function loadButtonState() {
    let currentStorage = String(localStorage.getItem('current_object')).split(',')
    let sysData = document.querySelector('.add_object')

    if (currentStorage.includes(String(idOfAttraction))) {
        sysData.innerText = 'Убрать'
        sysData.classList.add('active_add_button')
    } else {
        sysData.innerText = 'Добавить'
        sysData.classList.remove('active_add_button')
    }
}