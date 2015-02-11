
/** Used for the local storage, etc. */
var $app_id = 'api-examples';

/** Base URL of the server that offers the API. */
//var $base_url = 'https://btranslator.org';
var $base_url = 'http://dev.btranslator.org';

/** Settings for oauth2 authentication. */
var $oauth2_settings = {
    app_id: $app_id,
    token_endpoint: $base_url + '/oauth2/token',
    client_id: 'emberjs',
    client_secret: '123456',
    scope: 'user_profile',
    getPassword: function (callback) {
	var username = 'user1';
	var password = 'pass1';
	callback(username, password);
    },
};
