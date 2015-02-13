var $token = new OAuth2.Token($oauth2_settings);
$token.getPassword(function (callback) {
    var username = 'user1';
    var password = 'pass1'
    callback(username, password);
});

// Make sure that there is no token from previous sessions (for testing).
$token.erase();

// This function will get and display a token.
var display_token = function () {
    var access_token = $token.access_token();
    if (!access_token) {
        $token.get().done(function () {
            display_token();
        });
        return;
    }

    // Display the access_token.
    debug("\n-------------- access_token -------------------\n");
    debug('==> ' + access_token);
    debug("\n-----------------------------------------------\n");
};


// Get a token, then expire it so that we can test refreshing.
$token.get().done(function () {
    $token.expire();
    display_token();
});
