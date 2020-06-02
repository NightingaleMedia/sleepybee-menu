import * as dsv from '/node_modules/d3-dsv/src/index.js'
import * as fetch from '/fetch.js'

const execute = () => {

        d3.dsv(',', 'csv-src/sb-menu-003.csv', function (d) {
            return {
                category: d.Category,
                title: d.Title,
                dietnotes: d.DietaryNotes,

                desc: d.Description,
                price: d.Price,
                notes: d.AdditionalNotes,
                isItem: d.menuItem

            };
        }).then(result => fetch.build(result))


}




export {
    execute,
}