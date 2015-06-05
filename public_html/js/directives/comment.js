myApp.directive('comment', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      content: '=' ,
      index: '=',
    }, 
    templateUrl: 'js/directives/comment.html' 
  }; 
});

