var myApp = angular.module('myApp', [])
        .controller('commentsController', function($scope) {

        	$scope.isOpened = false;

        	$scope.open = function() {
        		
        		if (!$scope.isOpened) {
					var openForm = angular.element(document.querySelector('.leave-comment')).toggleClass('opened');
        		}else{
        			var openForm = angular.element(document.querySelector('.leave-comment')).toggleClass('opened');
        		}
        		$scope.isOpened=!$scope.isOpened;

        	};

            $scope.comments = [];

            $scope.addComment = function() {
                if ($scope.text !== undefined) {
                    var name = $scope.name;
                    if (name !== undefined) {
                        name = name.trim();
                        if (name.length === 0) {
                            name = 'Anonimous';
                        }
                    } else {
                        name = 'Anonimous';
                    }
                    $scope.comments.push({
                    	text: $scope.text,
                    	name: name,
                    	time: new Date(),
                    	del: function(index){
                            $scope.comments.splice(index,1);                       
                    	},
                    	edit: function(text,index){
                    		$scope.comments[index].text=text;
                    	}
                    	
                	});
					$scope.name='';
					$scope.text='';
                } else {
                    alert('Type some comment');
                }
            };

        });

