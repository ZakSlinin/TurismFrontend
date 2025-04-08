let id = ''


function onPageLoad() {
    let ids = window.location.search
    id = ids.split('=')[1]
}

onPageLoad()