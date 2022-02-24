let menubarelement = document.getElementById('menu-bar')
let menulinkelement = document.getElementById('menu-links')
menubarelement.onclick=function() {
    menulinkelement.classList.toggle("title-links")
}