// POST api/translations/get_random_sguid
var url = '/api/translations/get_random_sguid';
var settings = {
    type: 'POST',
    data: { target: 'random' },
};

http_request(url, settings).done(function () {
    settings.data = { target: 'translated', lng: 'sq' };
    http_request(url, settings);
});
