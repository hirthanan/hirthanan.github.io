
angular.module('myApp.controllers').controller('navCtrl', ['$scope', function ($scope) {
    //use this notation to declare function inside the javascript file

    $scope.myFunction = function myFunction() {
        document.getElementsByClassName("navBar")[0].classList.toggle("responsive");
    }


}
]);