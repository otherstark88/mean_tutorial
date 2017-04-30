var app = angular.module('adamNews', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';

  $scope.posts = [
    {title:'post 1', upvotes:5},
    {title:'post 2', upvotes:15},
    {title:'post 3', upvotes:34},
    {title:'post 4', upvotes:95},
    {title:'post 5', upvotes:3}
  ];

}]);
