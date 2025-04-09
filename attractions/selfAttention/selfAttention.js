let idOfAttraction

function changeButton(e) {
    let sysData = document.querySelector('.add_attraction')

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

function loadButtonState() {
    let currentStorage = String(localStorage.getItem('current_attractions')).split(',')
    let sysData = document.querySelector('.add_attraction')

    if (currentStorage.includes(String(idOfAttraction))) {
        sysData.innerText = 'Убрать'
        sysData.classList.add('active_add_button')
    } else {
        sysData.innerText = 'Добавить'
        sysData.classList.remove('active_add_button')
    }
}