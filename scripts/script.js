
let loader = document.getElementById('loader')
let open_bar = document.getElementById('menu-bar')
let close_bar = document.getElementById('close-menu')
let menu_v = document.querySelector('.menu-overlay')

// setTimeout(() => {
//     loader.classList.add('remove-loader')
// }, 3000)

window.addEventListener('load', () => {
    loader.classList.add('remove-loader')
})

open_bar.addEventListener('click', () => {
    // if(menu_v.classList.contains('remove-menu-overlay')){
    //     menu_v.classList.remove('remove-menu-overlay')
    // }
    menu_v.style.transform = "translateY(0px)"
    menu_v.style.transition = '2s'
})

close_bar.addEventListener('click', () => {
    // menu_v.classList.add('remove-menu-overlay')
    menu_v.style.transform = "translateY(-5000px)"
    menu_v.style.transition = '5s'
})

