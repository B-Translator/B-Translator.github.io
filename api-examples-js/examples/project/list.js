// POST btr/project/list
var url = '/btr/project/list';
var settings = { type: 'POST' };
http_request(url, settings).done(function () {
    // Filter list by origin.
    settings.data = { origin: 't*' };
    http_request(url, settings).done(function () {
        // Retrieve only a list of origins.
        settings.data = { project: '-' };
        http_request(url, settings).done(function () {
            // Filter list by origin.
            settings.data = {
                origin: 'test',
                project: 'p*',
            };
            http_request(url, settings);
        });
    });
});
