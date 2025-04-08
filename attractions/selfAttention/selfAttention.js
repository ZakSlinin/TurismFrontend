function onPageLoad() {
    let ids = window.location.search
    let splitedID = ids.split('=')[1]
    console.log(splitedID)
}

onPageLoad()