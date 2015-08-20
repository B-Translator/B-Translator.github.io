var $token = new OAuth2.Token($config.oauth2);

var export_project = function () {
    // Get an access_token.
    var access_token = $token.access_token();
    if (!access_token) {
        $token.get().done(export_project);
        return;
    }

    // POST api/project/export
    http_request('/api/project/export', {
        type: 'POST',
        data: {
            origin: 'test',
            project: 'kturtle',
            export_mode: 'most_voted',  // original | most_voted | preferred
            //preferred_voters: 'user1,user2,user3',
        },
        headers: {
            'Authorization': 'Bearer ' + access_token,
        },
    });
};

export_project();
