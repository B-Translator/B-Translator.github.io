
var $token = new OAuth2.Token($config.oauth2);

var delete_vocabulary = function () {
    // Get an access_token.
    var access_token = $token.access_token();
    if (!access_token) {
        $token.get().done(delete_vocabulary);
        return;
    }

    // POST api/vocabulary/delete
    http_request('/api/vocabulary/delete', {
        type: 'POST',
        data: {
            name: 'test1',
            lng: 'sq',
        },
        headers: {
            'Authorization': 'Bearer ' + access_token,
        },
    });
};

delete_vocabulary();
