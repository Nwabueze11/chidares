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

// Dark Mode Toggle Script

const toggleButton = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;

        toggleButton.addEventListener('click', () => {
            if (htmlElement.classList.contains('dark')) {
                htmlElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            } else {
                htmlElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
        });

        // Check Local Storage for Theme Preference
        if (localStorage.getItem('theme') === 'dark') {
            htmlElement.classList.add('dark');
        }