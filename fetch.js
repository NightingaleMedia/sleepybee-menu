//fetches the endpoint
function buildMenuItems(itemArray) {
    let menuArray = {
        "title": "title",
        "dietary-notes": 'notes',
        "description": 'description',
        "other": 'other'
    }
    console.log(menuArray)
    const sections = document.querySelectorAll('.section--menucontent')
    sections.forEach(section => {
        itemArray.forEach(item => {
            //title

            //dietary notes

            //description

            //price
            let createdItem = document.createElement('article')
            createdItem.innerText = item;
            section.appendChild(createdItem)
        })
    })
}

function printLines(entries) {
    let menuItems = [];
    // const parsed = JSON.parse(entries)
    // let menuItems = entries.split('_cokwr: ');
    // console.log(entries)

    // push entries to an array
    entries.forEach(entry => {
        if (entry.content.$t === '') {
            return;
        } else {
            menuItems.push((entry.content.$t).slice(7, -1))
        }
    })

    buildMenuItems(menuItems)


}




fetch(`https://spreadsheets.google.com/feeds/list/1VtHQCB_jq070F9g5LwxwDpcqonEQhVmpzGzdGo_mq_s/od6/public/basic?alt=json`)
    .then(sheet => sheet.json())
    .then(menu => printLines(menu.feed.entry));