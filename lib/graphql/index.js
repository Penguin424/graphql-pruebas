const { readFileSync, readdirSync } = require('fs');
const { join } = require('path');

let fileNames = readdirSync(__dirname);
let readArch = [];

fileNames.forEach((name) => {
    if(name.split('.')[1] === 'graphql')
    {
        readArch.push(readFileSync(
            join(__dirname, name),
            'utf-8'
        ));
    }
});

module.exports = { readArch };