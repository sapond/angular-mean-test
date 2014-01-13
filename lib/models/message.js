'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
// Schema
var MessageSchema = new Schema({
    message: String,
    ts: String 
});

// Validations
MessageSchema.path('message').validate(function (str) {
  return str && str.length;
}, 'Message cannot be blank!');

mongoose.model('Message', MessageSchema);
