
// document.firstElementChild.appendChild(preloader)


const preload = () => {
    const preloader = document.querySelector('.preloader')
    let i = 0;
    let text = 'loading...'
    const updateText = (i) => {
        const t = preloader.firstElementChild;
        t.innerText = `${text.slice(0,i)}`
        t.innerText.length < 1 ? t.innerText = ' ' : null;
        
    }
    setInterval(() => {
        i++
        (i > text.length + 5) ? i = 0 : null;
        updateText(i);
    }, 100)
}


preload();

window.onload = function () { 
    const preloader = document.querySelector('.preloader')
    preloader.classList.add('swiped-up')
    setTimeout(()=>{
        document.body.removeChild(document.body.firstElementChild)
    },1000)
 
    // preloader.classList.add('swiped-up')
}