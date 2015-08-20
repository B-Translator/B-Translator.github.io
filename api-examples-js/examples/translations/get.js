// POST btr/translations/get
var url = '/btr/translations/get';
var settings = {
    type: 'POST',
    data: {
        sguid: 'ed685775fa0608fa42e20b3d28454c63972f62cd',
        lng: 'sq',
    },
};

http_request(url, settings).done(function () {
    settings.data.sguid = 'random';
    http_request(url, settings).done(function () {
        settings.data.sguid = 'translated';
        http_request(url, settings).done(function () {
            settings.data.sguid = 'untranslated';
            http_request(url, settings);
        });
    });
});
