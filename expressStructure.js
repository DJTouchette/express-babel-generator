const util = require('util')
const exec = require('child_process').exec;
const execSyc = require('child_process').execSync;
const colors = require('colors');

const puts = (error, stdout, stderr) =>  { console.log(stdout) }

let appName = '';

process.argv.forEach(function (val, index, array) {
  if (index > 1 ) {
    appName = val;
  }
});
const dir = `${appName}/src`;
const install = 'npm i --save';
console.log('Making Directory!'.underline.yellow);
execSyc(`mkdir ${appName} && mkdir ${dir} && mkdir ${dir}/config && touch ${dir}/config/.keep && mkdir ${dir}/models && touch ${dir}/models/.keep && mkdir ${dir}/routes && mkdir ${dir}/server && touch index.js`);
console.log('Directory Creation Succesfull ✔'.underline.green);
console.log(`Please cd into dir and npm init`.underline.yellow);
process.exit();
// module.exports = makeStructure;
