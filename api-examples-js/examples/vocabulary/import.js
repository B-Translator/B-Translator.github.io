
var $token = new OAuth2.Token($config.oauth2);

var import_file = function (fd) {
    // Get an access_token.
    var access_token = $token.access_token();
    if (!access_token) {
        $token.get().done(function () {
            import_file(fd);
        });
        return;
    }

    // Make an http request for uploading the file.
    http_request('/api/vocabulary/import', {
        type: 'POST',
        headers: {
            'Authorization': 'Bearer ' + access_token,
        },
        data: fd,
        processData: false,
        contentType: false,
    });
};

var vocab = prompt('Enter the name of the vocabulary:', 'test1');
var lng = prompt('Enter the language of the vocabulary:', 'sq');
var fileSelector = $('<input type="file" />');

fileSelector.on('change', function(event) {
    var fd = new FormData();
    fd.append('name', vocab);
    fd.append('lng', lng);
    fd.append('file', event.target.files[0]);
    import_file(fd);
});

fileSelector.click();
