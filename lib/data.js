
/*

_data is responsible for creating, reading, updating and deleting files from the databases

*/

const fs = require('fs');
const path = require('path');
var _data = {};

const mongodb = require('mongodb');

var connectionURL = `mongodb://${process.env.DBusername}:${process.env.DBpassword}@ds237700.mlab.com:37700/portfolio-blogs`;

_data.baseDir = path.join(__dirname + '/../.data/');

_data.create = function (collectionName, data, callback) {
  if (!collectionName || !data || !callback) {
    callback('all fields were not provided')
    return
  }
  mongodb.MongoClient.connect(connectionURL, { useNewUrlParser: true }, function (err, client) {
    let db = client.db('portfolio-blogs');

    let collection = db.collection(collectionName).insertOne(data, (err, res) => {
      callback(err);

      client.close()
    });
  });
};

_data.read = function (collectionName, data, callback) {
  mongodb.MongoClient.connect(connectionURL, { useNewUrlParser: true }, function (err, client) {
    if (err) return callback(err, false);

    let db = client.db('portfolio-blogs')
    let collection = db.collection(collectionName).find(data).toArray((err, res) => {
        callback(err, res)
        client.close()
    });
  });
};

_data.list = function(dir, callback){
  fs.readdir(_data.baseDir + '/' + dir, function (err,data) {
      if(err){
          callback(err)
      } else {
          var trimmed = [];
          data.forEach(element => {
              trimmed.push(element.replace('.json',''))
          });
          callback(null,trimmed)
      }
  })
}

module.exports = _data;