'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    Message = mongoose.model('Message'),
    async = require('async');

exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};

exports.message = function(req, res) {
  return Message.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};

exports.messagePost = function(req, res) {
    var message = new Message({message: req.body.message});
    message.save(function(err) {
        if (!err) {
            return res.json(message);
        } else {
            return res.send(err);
        }
    });
};

exports.deleteMessage = function(req, res) {
    Message.findByIdAndRemove(req.query._id, function(err) {
        if (!err) {
              return res.json('');
        } else {
            return res.send(err);
        }
    });
};


