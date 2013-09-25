window.onpageshow = function (e) {
    if (e.persisted) {
        // Workaround
        // window.location.reload();
    }
}

app = angular.module("locbreak", []);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {template: "<div ng-controller='MainMenuCtrl'><button ng-click='foo()'>I am button</button></div>", controller: 'MainMenuCtrl'})
        .when("/other.html", {template: "<div ng-controller='OtherCtrl'><button ng-click='bar()'>I am other button</button></div>", controller: 'OtherCtrl'});
});

app.controller("MainMenuCtrl", ['$scope', '$location', function ($scope, $location) {
    $scope.foo = function () {
        $location.path("/other.html");
    }
}]);

app.controller("OtherCtrl", ['$scope', '$location', function ($scope, $location) {
    $scope.bar = function () {
        $location.path("/");
    }
}]);
