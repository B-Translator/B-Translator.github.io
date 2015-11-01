
var $config = {
    //api_url: 'https://btranslator.org',
    api_url: 'http://dev.btranslator.org',

    // Settings for oauth2 authentication.
    oauth2: {
        app_id: 'api-examples',
        auth_flow: 'password',     // password | proxy
        //proxy_endpoint: 'https://l10n.org.al/oauth2/proxy',
        token_endpoint: 'http://dev.btranslator.org/oauth2/token',
        client_id: 'test1',
        client_secret: '12345',
        scope: 'user_profile',
        getPassword: function (callback) {
            var username = 'user1';
            var password = 'pass1';
            callback(username, password);
        },
    },
};
