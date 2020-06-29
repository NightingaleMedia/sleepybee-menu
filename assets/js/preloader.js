 const preloader = document.querySelector('.preloader')
// document.firstElementChild.appendChild(preloader)

const preload = () => {
    let i = 0;
    let text = 'loading...'
    const updateText = (i) => {
        preloader.firstElementChild.innerText = `${text.slice(0,i)}`
    }
    setInterval(() => {
        i++
        (i > text.length + 5) ? i = 0 : null;
        updateText(i);
    }, 100)
}


preload();

window.onload = function () { 
    preloader.classList.add('swiped-up')
    setTimeout(()=>{
        document.body.removeChild(document.body.firstElementChild)
    },1000)
 
    // preloader.classList.add('swiped-up')
}