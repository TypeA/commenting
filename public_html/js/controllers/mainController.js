var myApp = angular.module('myApp', [])
        .controller('commentsController', function($scope) {

            $scope.comments = [];
            $scope.comment = {};

            $scope.addComment = function() {
                var name = $scope.name;
                if (name !== undefined) {
                    name = name.trim();
                    if (name.length === 0) {
                        name = 'Anonimous';
                    }
                } else {
                    name = 'Anonimous';
                }

                $scope.comments.push({text: $scope.text, name: name, time: new Date()});
            };
        });

