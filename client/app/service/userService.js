app.factory("userListe", ['$resource', function($resource) {
    return $resource('/home', {
    update: {
        method: 'PUT'
    }
});
}
]);