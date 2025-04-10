let attraction = document.getElementById("attraction_more_collections");
attraction.addEventListener("click", function (event) {
    window.open('attractions/attractions.html', '_blank')
})

let moreCompilation = document.getElementById("collection_img_id");
moreCompilation.addEventListener("click", function (event) {
    window.open('compilation/compilation.html', '_blank')
})

let moreObjects = document.getElementById("objects_more");
moreObjects.addEventListener("click", function (event) {
    window.open('object/object.html', '_blank')
})


let obj = document.querySelector('#obj')
let attr = document.querySelector('#attr')

obj.addEventListener("click", function (event) {
    window.open('object/selfObject/selfObject.html?id=17', '_blank')
})

attr.addEventListener("click", function (event) {
    window.open('attractions/selfAttention/selfAttention.html?id=13', '_blank')
})
