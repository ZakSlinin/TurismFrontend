let tag_template = `
    <button class="tag">
        <p id="tag_name"></p>
    </button>
`

function setTags(element, ...maxValues) {
    let tags = ['еда', 'музеи', 'на улице', 'религия']

    tags.forEach(tag => {
        let tagElement = `<button class="${tag}" onclick="changeTagStatus(event)">${tag}</button>`

        document.querySelector(element).innerHTML += tagElement
    })

}


function changeTagStatus(e) {
    if (e.target.id === 'all_tag') {
        clearOtherTags(e.target)
    } else {
        clearAllTag()
    }

    let attractionContainer = event.target.closest("button")

    let sysData = attractionContainer.innerText

    if (attractionContainer.classList.contains('active')) {
        attractionContainer.classList.remove('active')

        let currentStorage = String(localStorage.getItem('current_tags')).split(',')
        currentStorage.splice(currentStorage.indexOf(sysData), 1)
        localStorage.setItem('current_tags', currentStorage.join(','))
    } else {
        attractionContainer.classList.add('active')

        if (sysData !== 'все') {
            let currentStorage = String(localStorage.getItem('current_tags')).split(',')
            currentStorage.push(sysData)
            localStorage.setItem('current_tags', currentStorage.join(','))
        }
    }
}

function clearOtherTags(btn) {
    let currentStorage = String(localStorage.getItem('current_tags'))
        .split(',').splice(1)


    currentStorage.forEach((tag) => {
        if (tag !== 'null' || tag !== 'все') {
            try {
                let elemnt = document.getElementsByClassName(tag)
                elemnt[0].classList.remove('active')
            } catch (e) {
                console.error(e)
            }
        }
    })

    btn.classList.add('active')
    localStorage.setItem('current_tags', undefined)
    loadTags()
}

function clearAllTag() {
    let tags = document.querySelector('.tags')
    let btn = tags.querySelector('#all_tag')
    btn.classList.remove('active')
}