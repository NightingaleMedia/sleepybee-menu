const menuSection = document.querySelectorAll('section')
const sectionHeader = document.querySelectorAll('.section--header')
const menuHeader = document.querySelector('.menu--header')
const orderButton = document.querySelector('.order-now')
// const locWrap = document.querySelector('.location-holder')
// const blueash = document.querySelector('.blueash')
// const oakley = document.querySelector('.oakley')
let root = document.documentElement;

let links = {
        'oakley': {
            'href': 'https://sleepybeecafe.hrpos.heartland.us/',
            'phone': '5135332339'
        },
        'blueash': {
            'href': 'https://sleepybeecafeblueash.hrpos.heartland.us/menu',
            'phone': '5132412339'
        },
        'downtown': {
            'href': 'https://sleepybeecafedowntown.hrpos.heartland.us/menu',
            'phone': '5133812339'
        }
    }

        document.addEventListener('scroll', handleScroll)

        function findLocation(element) {

            let finder = element;
            while (!finder.classList.contains('location')) {
                finder = finder.parentElement;
            }
            return finder;

        }

        function handleOrder(e) {
            let locations = document.querySelectorAll('.location');
            locations.forEach(loc => {
                loc.classList.remove('location-selected')
                loc.querySelector('button').innerHTML = 'Order Now'
            
            })
            e.preventDefault()
            let exit = document.querySelector('.exit')
            if (this.classList.contains('order-now-expand')) {
                if (e.target !== this &&
                    e.target !== exit) {
                    const locationSelected = findLocation(e.target)
                    let button = locationSelected.querySelector('button')

                    locationSelected.classList.toggle('location-selected')
                    if (locationSelected.classList.contains('location-selected')) {
                        button.innerHTML = `
                <div class="call"
                onclick={location.href="tel:${links[locationSelected.dataset.loc].phone}"}>
                <i class="fas fa-phone"></i>
                   Call Us!
                   
                </div>
                <div class="online" 
                onclick={location.href="${links[locationSelected.dataset.loc].href}"}>
                <i class="fas fa-globe"></i>
                   Order Online
                </div>
                `    
                    } else {
                        button.innerHTML = `Order`
                    }

                } else {
                    
                    this.classList.remove('order-now-expand')
                }
            } else {
                this.classList.add('order-now-expand')
            }
        }

        function setHeaderHeight() {
            let menuHeight = ((sectionHeader[1].offsetHeight) * (sectionHeader.length + 1))
            let hasOpen = [...menuSection].find(section => section.classList.contains('open'))
            if (hasOpen == undefined) {
                menuHeader.style.height = `${window.innerHeight}px`;
                menuHeader.classList.remove('menu-collapsed');
            }
        }

        function initialize() {
            const scrollNow = document.querySelector('.scroll-down')
            scrollNow.addEventListener('click', handleScroll);
            scrollNow.addEventListener('touchstart', handleScroll)
            // turn on toggling
            sectionHeader.forEach(section => {
                section.addEventListener('click', toggleSection)
                section.addEventListener('touchstart', toggleSection)
            })
            // handle the order
            orderButton.addEventListener('click', handleOrder)
            orderButton.addEventListener('touchstart', handleOrder)

            // blueash.onclick = function () {
            //     window.location.href = 'https://sleepybeecafeblueash.hrpos.heartland.us/'
            // };
            setHeaderHeight();
            //determine window height

            //handle scrolling feature
        }

        function getOpenSection() {
            return document.querySelector('.open')
        }

        const addMiniMenu = () => {
            let result = ((window.innerHeight - (menuHeader.offsetHeight + getOpenSection().offsetHeight + locWrap.offsetHeight)) / menuSection.length) + 10;
            (result < 25) ? result = 30: result;
            root.style.setProperty(`--mini-menu-size`, result + 'px');
        }

        function handleScroll(e) {
            menuHeader.removeAttribute('style')
            menuHeader.classList.add('menu-collapsed')
        }

        function toggleSection(e) {
            e.preventDefault();
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
                        setTimeout(() => {
                            addMiniMenu()
                        }, 400);
                    }
                })
            }
        }




        initialize();