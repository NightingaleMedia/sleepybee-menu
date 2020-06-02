import * as parse from './parse.js';
import {menuItem, MenuSubSection} from './builder.js'
//fetches the endpoint
function buildMenuItems(itemArray) {
    console.log(itemArray)
    const section = document.querySelector('.section--breakfast-favorites')

        itemArray.forEach(item => {
    
            if(item.price == '' && item.title != '' && item.isItem == ''){
                let createdCat = new MenuSubSection(item);
                section.appendChild(createdCat.render())
            }

            else if(item.isItem != 'TRUE'){
                console.log(item.title)
            }
            else if(item.isItem == 'TRUE'){
                let createdItem = new menuItem(item)
                section.appendChild(createdItem.render())
            }
            
        })

}


function build(items) {

    buildMenuItems(items)

}

parse.execute();

// function printLines(entries) {
//     const parsed = JSON.parse(entries)
//     let menuItems = entries.split('_cokwr: ');
//     console.log(entries)

//     push entries to an array
//     entries.forEach(entry => {
//         if (entry.content.$t === '') {
//             return;
//         } else {
//             menuItems.push((entry.content.$t).slice(7, -1))
//         }
//     })

//     buildMenuItems(menuItems)


// }
// fetch(`https://spreadsheets.google.com/feeds/list/1VtHQCB_jq070F9g5LwxwDpcqonEQhVmpzGzdGo_mq_s/od6/public/basic?alt=json`)
//     .then(sheet => sheet.json())
//     .then(menu => printLines(menu.feed.entry));


export {
    build
}