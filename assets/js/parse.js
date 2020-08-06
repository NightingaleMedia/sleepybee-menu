// import * as dsv from '/node_modules/d3-dsv/src/index.js'
import * as fetch from './fetch.js'

const executeSheets = (n) => {
    let url = `https://docs.google.com/spreadsheets/d/e/2PACX-1vRyu85xIQj8N-3tG6uDkql7Azd9CKxta9YkG_PLgl5r1WAgUkMrTFO2WQfzL3sPqb0k2GcOMfs7L-QF/pub?output=csv`
    let idObj = {
        '1': '0',
        '2': '492911777',
        '3': '1434603219'
    }
    console.log(url + idObj[n])
    return d3.dsv(',', url + `&gid=${idObj[n]}`, function (d) {
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


const executePHP = (n) => {
    let url = 'csv-src/sb_'
    let idObj = {
        '1' : 'dine_in',
        '2': 'carry_out',
        '3': 'drinks'
    }
    console.log(url + idObj[n] + '.php')
    return d3.dsv(',', url + `${idObj[n]}.php`, function (d) {
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
    // directory for the live site just needs the folder name
    // using ../ doesn't work.

    
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