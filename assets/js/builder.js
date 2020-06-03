class MenuSubSection {
    constructor(item) {
        this.container = document.createDocumentFragment('div');
        this.menuHeader = document.createElement('div')
        this.menuHeader.classList.add('menu-content--header')
        this.menuHeader.innerText = item.title;

        this.menuDesc = document.createElement('div')
        this.menuDesc.classList.add('menu-content--header-description')
        this.menuDesc.innerText = item.desc;

    }
    render() {
        this.container.appendChild(this.menuHeader)
        this.container.appendChild(this.menuDesc)
        return this.container;
    }
}

function parseDiet(notes) {
    //if there is  one at all
    if (notes.length == 0) {
        return '';
    //if a comma exists
    } else if (notes.indexOf(',') !== -1) {
        //build an array
        let spanArray = [];
        let ary = notes.split(', ')
        ary.forEach(a => {
            spanArray.push(`<span class="${a.toLowerCase()}"></span>`)
        })
        return spanArray.join('')
    } else {
        return `<span class="${notes.toLowerCase()}"></span>`
    }
}
class menuItem {
    constructor(item) {
        this.container = document.createElement('article')
        this.diet = parseDiet(item.dietnotes);
        this.itemContents = `
            <div class="menu-item--title">${item.title}
            ${this.diet}
            </div>
            <div class = "menu-item--description">${item.desc}</div> 
            <div class = "menu-item--price" > ${item.price.replace(/\|/g, '<br>')} </div> 
            <div class = "menu-item--notes" >${item.notes.replace(/\|/g, '<span></span>')}</div>`;
        this.container.innerHTML = this.itemContents;

    }

    render() {
        return this.container;
    }
}

export {
    menuItem,
    MenuSubSection
}