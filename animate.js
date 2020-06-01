const menuSection = document.querySelectorAll('section')
const sectionHeader = document.querySelectorAll('.section--header')
const menuHeader = document.querySelector('.menu--header')
let root = document.documentElement;

document.addEventListener('scroll', handleScroll)

function setHeaderHeight(){
        let menuHeight = ((sectionHeader[1].offsetHeight) * (sectionHeader.length + 1))
 
        menuHeader.style.height = `${window.innerHeight - menuHeight}px`;
        menuHeader.classList.remove('menu-collapsed');
}
function initialize(){
    // turn on toggling
    sectionHeader.forEach(section => section.addEventListener('click', toggleSection))
    setHeaderHeight();
    //determine window height

}
function getOpenSection() {
    return document.querySelector('.open')
}

const addMiniMenu = (section) => {
  

    let result = ((window.innerHeight - (menuHeader.offsetHeight + getOpenSection().offsetHeight)) / menuSection.length) + 10 ;
    
    (result < 25) ? result = 30 : result;
    root.style.setProperty(`--mini-menu-size`, result + 'px');

    console.log('result: '+ result)
}

function handleScroll(e) {
   
    menuHeader.removeAttribute('style')
    menuHeader.classList.add('menu-collapsed')
}

function toggleSection() {
    let parent = this.parentElement

    // console.log(this)
    if (parent.classList.contains('open')) {
        parent.classList.remove('open')

        menuSection.forEach(section => section.classList.remove('mini-menu'))
        setTimeout(setHeaderHeight, 1000);
    } else {
        handleScroll();
        menuSection.forEach(section => section.classList.remove('open'))
        menuSection.forEach(section => section.classList.remove('mini-menu'))
        parent.classList.add('open')
        menuSection.forEach(section => {
            section.removeAttribute('style')
            if (!section.classList.contains('open')) {
                section.classList.add('mini-menu');
                setTimeout(()=>{addMiniMenu(section)}, 400);
            }
        })
    }
}

window.addEventListener('load', initialize)
