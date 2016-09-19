const util = require('util')
const exec = require('child_process').exec;
const fs = require('fs');
const file = require('./expressConst.js');
const execSyc = require('child_process').execSync;
const customScripts = {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon src/index.js --exec babel-node",
    "build": "babel src -d dist",
    "serve": "node dist/index.js",
    "build:docs": "apidoc -i src/ -o apidoc/ && open -a 'Google Chrome' apidoc/index.html"
  };

const colors = require('colors');
const puts = (error, stdout, stderr) =>  { console.log(stdout.underline.green) };

let appName = '';

process.argv.forEach(function (val, index, array) {
  if (index > 1 ) {
    appName = val;
  }
});

const installDev = 'npm i --save-dev';
const install = 'npm i --save';

// exec(`${installDev} babel-cli babel-preset-es2015 && ${installDev} babel-preset-stage-2 && ${installDev} babel-watch && ${installDev} mocha && ${installDev} nodemon && ${install} apidoc && ${install} body-parser && ${install} express && ${install} jsonwebtoken && ${install} morgan && ${install} cookie-parser && ${install} node-env-file` , puts);
  console.log('Installing npm dependencies....'.underline.yellow);
  console.log(`Installing babel-cli....`.underline.yellow);
  execSyc(`${installDev} babel-cli babel-preset-es2015`, puts);
  console.log(`Installing babel-preset-stage-2...`.underline.yellow );
  execSyc(`${installDev} babel-preset-stage-2`, puts);
  console.log(`Installing babel-watch.....`.underline.yellow);
  execSyc(`${installDev} babel-watch`, puts);
  console.log(`Installing mocha.....`.underline.yellow);
  execSyc(`${installDev} mocha`);
  console.log(`Installing nodemon....`.underline.yellow);
  execSyc(`${installDev} nodemon`, puts);
  console.log(`Installing apidoc.....`.underline.yellow);
  execSyc(`${install} apidoc`, puts);
  console.log(`Installing body-parse....`.underline.yellow);
  execSyc(`${install} body-parser`, puts);
  console.log(`Installing express.....`.underline.yellow);
  execSyc(`${install} express`, puts);
  console.log(`Installing jsonwebtoken....`.underline.yellow);
  execSyc(`${install} jsonwebtoken`, puts);
  console.log(`Installing morgan....`.underline.yellow);
  execSyc(`${install} morgan`, puts);
  console.log(`Installing cookie-parser....`.underline.yellow);
  execSyc(`${install} cookie-parser`);
  console.log(`Installing node-env-file.....`.underline.yellow);
  execSyc(`${install} node-env-file`, puts);
  console.log(`Dependencies Installed ✔`.underline.green);

const fileKeys = Object.keys(file);

fileKeys.forEach( (val, index, array) => {
  fs.writeFile(val, file[val], function(err) {
      if(err) {
          return console.log(err);
      }
      console.log(`${val} was made successfully! ✔`.underline.green);
  });
});

function replacePackage(data) {
    const parsedJson = JSON.parse(data);
    parsedJson.scripts = customScripts;

    const newJson = JSON.stringify(parsedJson);

    fs.writeFile('package.json', newJson, function(err) {
      if(err) {
          return console.log(err);
      }
      console.log('package.json scripts added ✔'.underline.green);
  });
}


const JSONPackage = fs.readFile('package.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  replacePackage(data);
  return data;
});

console.log('Make something awesome!'.rainbow);
// module.exports = makeBoilerPlate;
