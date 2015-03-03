var $token = new OAuth2.Token($config.oauth2);
$token.getPassword(function (callback) {
    var username = 'user1';
    var password = prompt("Password for 'user1' (it is 'pass1'): ");
    callback(username, password);
});

// Make sure that there is no token from previous sessions (for testing).
$token.erase();

// This function will just get and display a token.
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

// Call the function.
display_token();
