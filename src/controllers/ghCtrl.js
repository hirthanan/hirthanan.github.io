
angular.module('myApp.controllers').controller('ghCtrl', function($scope, $http) {

    $scope.URL = "https://api.github.com/users/hirthanan/";

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // GET list of hirthanan's repos
    $http.get($scope.URL+"repos").
        then(function(repoData) {
            projects = [];
            repoData = repoData.data;
            for (var i = repoData.length - 1; i >= 0; i--) {
                // skip these repos
                if (repoData[i].name == "Switch-Statement-Assignment") {
                    continue;
                }
                projects.push({"name":capitalizeFirstLetter(repoData[i].name),
                               "gh_url":repoData[i].html_url});
            }
            $scope.repoData = repoData;
            $scope.projects = projects;
        });
});