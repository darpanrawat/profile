const path = require('path');
const { StringDecoder } = require('string_decoder');
const fs = require('fs');
const helpers = require('./helpers');
const _data = require('./data');
const nodemailer = require('nodemailer');
var mongo = require('mongodb');

var handlers = {}

handlers.blog = function (data, callback) {
  if (data.method != 'get') {
    callback (405, {message: 'Unacceptable method'}, 'application/json')
  } else {
    let blog = typeof(data.query.id) === 'string' ? data.query.id : false;

    if (blog) {
      console.log(blog)
      _data.read('blogs', {'_id': new mongo.ObjectID(blog)}, function (err, data) {
        if (err) {
          callback(404, {
            message: 'Could not find blog'
          }, 'application/json')
        } else {
          callback( 200, data[0], 'application/json' )
        }

      })
    } else {
      callback(406, {message: 'No blog provided'}, 'application/json')
    }
  }
}

handlers.blogs = function (data, callback) {
  let acceptableMethods = ["get"];

  let handler = typeof(acceptableMethods.indexOf(data.method)) !== 'undefined' ? handlers._blogs[data.method] : false;

  if (handler) {
    handler(data, callback)
  } else {
    callback( 406, {message: 'Unacceptable Method'}, 'application/json')
  }
}
  handlers._blogs = {};
  handlers._blogs.get = function (data, callback) {
    _data.read('blogs', {}, function (err, blogs){
        !err ? callback(200, blogs, 'application/json') : callback(500)
    })
  }

handlers.email = function (data, callback) {
  if (data.method != 'post') {
    callback(405, {message: 'Unacceptable method'}, 'application/json')
  } else {
    let email = data.payload.email;
    let about = data.payload.about;
    let help = data.payload.help;
    let additional = data.payload.additional;
    let firstName = data.payload.firstName;
    let lastName = data.payload.lastName;

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ers96308@gmail.com',
        pass: 'Send1234567890'
      }
    });
    
    let text = "[ABOUT] \n " + about + "\n [HELP] \n " + help + " \n [ADD] \n "+ additional + "\n from: " + firstName + ' ' + lastName + ' - at ' + email;
    var mailOptions = {
      from: email,
      to: 'diaz.johnDev@gmail.com',
      subject: 'FROM PORTFOLIO CONTACT PAGE - ' + email,
      text: text
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        callback(405, {message: 'Could not send email!'}, 'application/json')
      } else {
        callback(200, {message: 'Sent!'}, 'application/json')
      }
    }); 
  }
}
handlers.notfound = function (data, callback) {
  callback(404, {message:'Could not find requested route'}, 'application/json')
}
module.exports = handlers;