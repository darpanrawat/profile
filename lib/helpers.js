const { StringDecoder } = require('string_decoder');
const _data = require('./data.js');

var helpers = {};

helpers.jsonToObj = function (str) {
  try {
    let obj = JSON.parse(str);
    return obj;
  } catch (e) {
    return {}
  }
};

helpers.gatherDirContent = function (directory, fileNames, callback) {
  let decoder = new StringDecoder('utf8');
  let contents = [];

  for( let i = 0 ; i < fileNames.length ; i++ ) {
    _data.read('blogs', fileNames[i].replace('.json', ''), function (err, data){
      contents.push(  JSON.parse(data) )
      if (contents.length == fileNames.length) {
        callback(false, contents)
      }
    });

  }
};


module.exports = helpers;