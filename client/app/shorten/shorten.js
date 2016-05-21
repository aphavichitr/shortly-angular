angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = '';
  $scope.data = {
    links: []
  };

  $scope.addLink = function() {
    if ($scope.shortenForm.$valid) {
      Links.addOne({url: $scope.link})
        .then(function(data) {
          console.log(data);
          $scope.data.links.push(data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  };
});
