var app = angular.module("myApp", ['ngRoute', 'ngResource']);

app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        
        $routeProvider
            .when('/', {
                templateUrl: 'static/views/boitiers.html',
                controller: "listeCtrl",
                resolve: {
                    liste: function(userListe) {
                        return userListe.query();
                    }
                }
            })
            .otherwise({
                redirectTo: '/',

            });
    }
]);