// import * as dsv from '/node_modules/d3-dsv/src/index.js'
import * as fetch from './fetch.js'

const execute = (n) => {
    let url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRyu85xIQj8N-3tG6uDkql7Azd9CKxta9YkG_PLgl5r1WAgUkMrTFO2WQfzL3sPqb0k2GcOMfs7L-QF/pub?output=csv'
    let idObj = {
        '1' : '0',
        '2': '492911777',
        '3': '14346032192'
    }
    return d3.dsv(',', url + '&' + `gid=${idObj[n]}`, function (d) {
            return {
                category: d.Category,
                title: d.Title,
                dietnotes: d.DietaryNotes,
                desc: d.Description,
                price: d.Price,
                notes: d.AdditionalNotes,
                isItem: d.menuItem
            };
        })
        .then(result  =>  result);

}

const executeSaved = (n) => {
     let idObj = {
        '1': 'SleepyBee_DineIn',
        '2': 'SleepyBee_Drinks',
        '3': 'SleepyBee_CarryOut'
    }
    return d3.dsv(',', `csv-src/${idObj[n]}.csv`, function (d) {
            return {
                category: d.Category,
                title: d.Title,
                dietnotes: d.DietaryNotes,
                desc: d.Description,
                price: d.Price,
                notes: d.AdditionalNotes,
                isItem: d.menuItem
            };
        })
        .then(result => result);

}





export {
    execute,
    executeSaved
}