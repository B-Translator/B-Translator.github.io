
var $token = new OAuth2.Token($config.oauth2);
$token.expire();

var delete_project = function () {
    // Get an access_token.
    var access_token = $token.access_token();
    if (!access_token) {
        $token.get().done(delete_project);
        return;
    }

    // POST api/project/delete
    http_request('/api/project/delete', {
        type: 'POST',
        data: {
            origin: 'test1',
            project: 'kturtle',
        },
        headers: {
            'Authorization': 'Bearer ' + access_token,
        },
    }).done(function () {
        http_request('/api/project/delete', {
            type: 'POST',
            data: {
                origin: 'test',
                project: 'kturtle',
            },
            headers: {
                'Authorization': 'Bearer ' + access_token,
            },
        });     
    });
};

delete_project();
