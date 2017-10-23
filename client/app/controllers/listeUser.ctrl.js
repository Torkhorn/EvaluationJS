app.controller("listeCtrl", function($scope, $http, liste, userFactory) {
    $scope.maListe = liste;
    console.log(liste);
    console.log($scope.maListe);
})