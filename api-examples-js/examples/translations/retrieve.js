// GET public/btr/translations
var url = '/public/btr/translations/ed685775fa0608fa42e20b3d28454c63972f62cd?lng=sq';
http_request(url).done(function () {
    var url = '/public/btr/translations/next?lng=sq';
    http_request(url).done(function () {
        var url = '/public/btr/translations/translated?lng=sq';
        http_request(url).done(function () {
            var url = '/public/btr/translations/untranslated?lng=sq';
            http_request(url);
        });
    });
});
