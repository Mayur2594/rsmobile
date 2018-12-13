var app = angular.module('AngularApp', []);

app.controller('myCtrl', function($scope) {

    M.AutoInit();


    $scope.RedirectToCaptureLocation = function()
    {
        myVar = setTimeout(function(){ clearTimeout(myVar);location.href="Location.html" }, 5000);
    };

    $scope.setAddress = function()
    {
        location.href="Home.html";
    };

     $('ul.tabs').tabs();
   

     $scope.RedirectToDetails = function(id)
     {
            location.href = "Restro_details.html?"+id
     };
  
    $scope.Likerestro = function()
    {
        var elm = document.getElementById("iconlike");
        elm.innerHTML = 'favorite';
        $scope.$apply();
    };


});