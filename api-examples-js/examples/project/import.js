
var $token = new OAuth2.Token($oauth2_settings);

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
    http_request('/btr/project/import', {
        type: 'POST',
        headers: {
            'Authorization': 'Bearer ' + access_token,
        },
        data: fd,
        processData: false,
        contentType: false,
    });
};

var origin = prompt('Enter the origin of the project:', 'test1');
var project = prompt('Enter the name of the project:');
var fileSelector = $('<input type="file" />');

fileSelector.on('change', function(event) {
    var fd = new FormData();
    fd.append('origin', origin);
    fd.append('project', project);
    fd.append('file', event.target.files[0]);
    import_file(fd);
});

fileSelector.click();
