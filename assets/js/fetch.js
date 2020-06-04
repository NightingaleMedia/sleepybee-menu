import * as parse from './parse.js';
import {menuItem, MenuSubSection, endNotes} from './builder.js'
//fetches the endpoint
function buildMenuItems(itemArray, section) {
        itemArray.forEach(item => {
            if(item.price == '' && item.title != '' && item.isItem == ''){
                let createdCat = new MenuSubSection(item);
                section.appendChild(createdCat.render())
            }
            else if(item.isItem != 'TRUE'){
                return;
            }
            else if(item.isItem == 'TRUE'){
                let createdItem = new menuItem(item)
                section.appendChild(createdItem.render())
            }     
        })
        let headItem = {
            'title' : 'Dietary Notes',
            'desc': `Bee Careful: Many items on our menu contain nuts or other potential allergens. Please let us know if you have any allergy concerns. If in doubt, please ask!  While we have systems in place to reduce exposure, we must work together. Your health is our priority!`
        }
            let head = new MenuSubSection(headItem);
            let end = new endNotes();
            section.appendChild(head.render())
            section.appendChild(end.render())

}

function build() {
  const section = document.querySelectorAll('.section--menucontent')
//   section.forEach(sect => buildMenuItems(items, sect))
  for(let i =  1;  i <= section.length; i++){
        parse.execute(i).then(result => buildMenuItems(result, section[i-1]))
  }
}

build();

// console.log(parse.execute('1'))
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