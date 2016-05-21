angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.data = {
    links: []
  };

  $scope.addLink = function() {
    console.log($scope.link);
    Links.addOne($scope.link)
      .then(function(data) {
        console.log(data);
        $scope.data.links.push(data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});
