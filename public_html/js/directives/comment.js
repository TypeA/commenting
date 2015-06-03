myApp.directive('comment', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      content: '=' 
    }, 
    templateUrl: 'js/directives/comment.html' 
  }; 
});

