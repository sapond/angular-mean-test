/*jshint indent:4 */
'use strict';
angular.module('meanApp')
    .factory('Message', function($resource) {
        return $resource('/mean/api/message:messageId', { _id: '@_id' });
    })
        .controller('MessageCtrl', function ($scope, Message) {
            $scope.messages = Message.query();
                    
            $scope.remove = function(message) {
                Message.remove(message)
                    .$promise
                    .then(function() {
                        $scope.messages.splice($scope.messages.indexOf(message), 1);
                    });
            };

            $scope.addMessage = function() {
                Message.save({
                    message: $scope.messageText,
                    ts: new Date().getTime()
                })
                    .$promise
                    .then(function(message) {
                        $scope.messages.push(message);
                    });
            };
        });
