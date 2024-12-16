document.querySelector('.menu-toggle').addEventListener('click', menu)
function menu(){
    document.querySelector('.main-navigation').classList.toggle('toggled');
}
document.querySelector('.header-menu ul li a').addEventListener('click', toggle);
function toggle(){
    document.querySelector('.main-navigation').classList.remove('toggled');
}

window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

