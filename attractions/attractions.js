function attraction_template_spawner(templateData) {
    const list = document.querySelector('.attractions_container')
    const template = document.querySelector('#attraction_template')

    const item = template.content.cloneNode(true)

    item.querySelector('#attraction_id').innerText = 0

    list.append(item)
}


attraction_template_spawner(null)
attraction_template_spawner(null)
attraction_template_spawner(null)

attraction_template_spawner(null)
attraction_template_spawner(null)
attraction_template_spawner(null)


function setPostData(event) {
    let attractionContainer = event.target.closest('.attraction')
    let sysData = attractionContainer.querySelector('#attraction_id').innerText
    window.open(`selfAttention/selfAttention.html?id=${sysData}`, '_blank')
}

window.onscroll = function (ev) {
    if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
        attraction_template_spawner(null)
        attraction_template_spawner(null)
        attraction_template_spawner(null)
    }
};