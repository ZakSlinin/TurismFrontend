ls_objects = String(localStorage.getItem('current_attractions')).split(',')
ls_attractions = String(localStorage.getItem('current_object')).split(',')

let bads = []

if (bads.includes(ls_objects.at(0)) === false || bads.includes(ls_attractions.at(0)) === false) {
    document.getElementById('user_collection').style.display = 'flex'
}