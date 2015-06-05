var myApp = angular.module('myApp', [])
        .controller('commentsController', function($scope,dataService) {

        	$scope.isOpened = false;

        	$scope.open = function() {
        		
        		if (!$scope.isOpened) {
					var openForm = angular.element(document.querySelector('.leave-comment')).toggleClass('opened');
				}else{
        			var openForm = angular.element(document.querySelector('.leave-comment')).toggleClass('opened');
        		}
        		$scope.isOpened=!$scope.isOpened;
        	};

            $scope.addComment = dataService.addComment($scope.name,$scope.text);

            $scope.clearData = function() {
					$scope.name='';
					$scope.text='';
				};

        });

