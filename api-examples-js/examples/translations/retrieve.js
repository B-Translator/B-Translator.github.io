// GET btr/translations
var url = '/btr/translations/ed685775fa0608fa42e20b3d28454c63972f62cd?lng=sq';
http_request(url).done(function () {
    var url = '/btr/translations/random?lng=sq';
    http_request(url).done(function () {
        var url = '/btr/translations/translated?lng=sq';
        http_request(url).done(function () {
            var url = '/btr/translations/untranslated?lng=sq';
            http_request(url);
        });
    });
});
