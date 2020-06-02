class MenuSubSection{
    constructor(item){
       this.container = document.createDocumentFragment('div');
       this.menuHeader = document.createElement('div')
       this.menuHeader.classList.add('menu-content--header')
       this.menuHeader.innerText = item.title;

       this.menuDesc = document.createElement('div')
       this.menuDesc.classList.add('menu-content--header-description')
       this.menuDesc.innerText = item.desc;

    }
    render(){
        this.container.appendChild(this.menuHeader)
        this.container.appendChild(this.menuDesc)
        return this.container;
    }
}
class menuItem {
    constructor(item) {
        this.container = document.createElement('article')
        this.dietnotes = [];
        this.itemContents = `
            <div class = "menu-item--title" >${item.title}
            ${this.dietnotes}
            </div>
            <div class = "menu-item--description">${item.desc}</div> 
            <div class = "menu-item--price" > ${item.price} </div> 
            <div class = "menu-item--notes" >${item.notes}</div>`;
        this.container.innerHTML = this.itemContents;

    }

    render(){
        return this.container;
    }
}

export {menuItem, MenuSubSection}