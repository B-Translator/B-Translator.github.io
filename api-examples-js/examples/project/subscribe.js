
var $token = new OAuth2.Token($config.oauth2);

/**
 * Subscribe to a project.
 */
var subscribe = function () {
    // Get an access_token.
    var access_token = $token.access_token();
    if (!access_token) {
        $token.get().done(subscribe);
        return;
    }

    // POST api/project/subscribe
    var url = '/api/project/subscribe';
    var settings = {
        type: 'POST',
        data: {
            origin: 'test',
            project: 'pingus',
        },
        headers: {
            'Authorization': 'Bearer ' + access_token,
        },
    };
    http_request(url, settings).done(function () {
        // Get the list of subscriptions.
        subscriptions(access_token);
    });
};

/**
 * Get a list of subscriptions.
 */
var subscriptions = function (access_token) {
    // Get the list of subscriptions.
    var url = '/api/project/subscriptions';
    var settings = {
        type: 'POST',
        headers: {
            'Authorization': 'Bearer ' + access_token,
        },
    };
    http_request(url, settings).done(function (result) {
        console.log(result);
        unsubscribe(access_token);
    });
};

/**
 * Unsubscribe from a project.
 */
var unsubscribe = function (access_token) {
    // POST api/project/unsubscribe
    var url = '/api/project/unsubscribe';
    var settings = {
        type: 'POST',
        data: {
            origin: 'test',
            project: 'pingus',
        },
        headers: {
            'Authorization': 'Bearer ' + access_token,
        },
    };
    http_request(url, settings);
};


// Call the functions.
subscribe();
