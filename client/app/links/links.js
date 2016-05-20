angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};

  $scope.getAll = function() {
    Links.getAll()
      .then(function(links) {
        $scope.data.links = links;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.addOne = function() {
    Links.addOne($scope.link)
      .then(function(data) {
        $scope.data.links.push(data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});

