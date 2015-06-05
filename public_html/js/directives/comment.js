myApp.directive('comment', function(dataService) { 
  return { 
    restrict: 'E', 
    scope: { 
      content: '=' ,
      index: '=',
    }, 
    templateUrl: 'js/directives/comment.html' 
  }; 
});

