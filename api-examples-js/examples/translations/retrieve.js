// GET api/translations
var url = '/api/translations/ed685775fa0608fa42e20b3d28454c63972f62cd?lng=sq';
http_request(url).done(function () {
    var url = '/api/translations/random?lng=sq';
    http_request(url).done(function () {
        var url = '/api/translations/translated?lng=sq';
        http_request(url).done(function () {
            var url = '/api/translations/untranslated?lng=sq';
            http_request(url);
        });
    });
});
