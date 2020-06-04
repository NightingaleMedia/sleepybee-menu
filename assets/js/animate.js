const menuSection = document.querySelectorAll('section')
const sectionHeader = document.querySelectorAll('.section--header')
const menuHeader = document.querySelector('.menu--header')
const orderButton = document.querySelector('.order-now')
const locWrap = document.querySelector('.location-holder')
const blueash = document.querySelector('.blueash')
const oakley = document.querySelector('.oakley')
let root = document.documentElement;

document.addEventListener('scroll', handleScroll)
function handleOrder(){
    this.previousElementSibling.classList.toggle('shown')
    this.previousElementSibling.classList.contains('shown') ? this.innerText = 'x' : this.innerText = 'Order Online';
}
function setHeaderHeight(){
        let menuHeight = ((sectionHeader[1].offsetHeight) * (sectionHeader.length + 1))
        let hasOpen = [...menuSection].find(section => section.classList.contains('open'))
        if(hasOpen == undefined){ 
        menuHeader.style.height = `${window.innerHeight - menuHeight}px`;

        menuHeader.classList.remove('menu-collapsed');
        }
}
function initialize(){

    // turn on toggling
    sectionHeader.forEach(section => section.addEventListener('click', toggleSection))
    // handle the order
    orderButton.addEventListener('click', handleOrder)
    oakley.onclick = function () {
        window.location.href = 'https://sleepybeecafe.hrpos.heartland.us/'
    };
    blueash.onclick = function () {
        window.location.href = 'https://sleepybeecafeblueash.hrpos.heartland.us/'
    };
    setHeaderHeight();
    //determine window height

    //handle scrolling feature
    

}
function getOpenSection() {
    return document.querySelector('.open')
}

const addMiniMenu = () => {
    let result = ((window.innerHeight - (menuHeader.offsetHeight + getOpenSection().offsetHeight + locWrap.offsetHeight)) / menuSection.length) + 10 ;
    (result < 25) ? result = 30 : result;
    root.style.setProperty(`--mini-menu-size`, result + 'px');
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
        setTimeout(setHeaderHeight, 2000);
    } else {
        handleScroll();
        menuSection.forEach(section => section.classList.remove('open'))
        menuSection.forEach(section => section.classList.remove('mini-menu'))
        parent.classList.add('open')
        menuSection.forEach(section => {
            section.removeAttribute('style')
            if (!section.classList.contains('open')) {
                section.classList.add('mini-menu');
                setTimeout(()=>{addMiniMenu()}, 400);
            }
        })
    }
}

initialize();
