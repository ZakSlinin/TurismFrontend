let cr_pt = document.querySelector('.create_post_nav')
let dl_pt = document.querySelector('.delete_post_nav')
let ifram = document.querySelector('#iframe')

cr_pt.addEventListener('click', e => {
    cr_pt.classList.add('active')
    dl_pt.classList.remove('active')
    ifram.src = 'createPost/createPost.html'
})

dl_pt.addEventListener('click', e => {
    dl_pt.classList.add('active')
    cr_pt.classList.remove('active')
    ifram.src = 'deletePosts/deletePost.html'
})