let id = ''


function onPageLoad() {
    let ids = window.location.search
    id = ids.split('=')[1]
}

onPageLoad()

let tags_var = ['еда', 'не еда', 'другое']

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

function setTags() {
    setTagsToElement(tags_var)
}
