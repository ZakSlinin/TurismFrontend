function attraction_template_spawner(templateData) {
    // if (templateData === null) {
    //
    // }
    const list = document.querySelector('.attractions_container')
    const template = document.querySelector('#attraction_template')

    const item = template.content.cloneNode(true)
    // item.querySelector('li').textContent = 'Молоко'
    list.append(item)
}


attraction_template_spawner(null)
attraction_template_spawner(null)
attraction_template_spawner(null)
attraction_template_spawner(null)
attraction_template_spawner(null)
attraction_template_spawner(null)
attraction_template_spawner(null)