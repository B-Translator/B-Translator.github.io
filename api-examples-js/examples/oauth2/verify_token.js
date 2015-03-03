var $token = new OAuth2.Token($config.oauth2);

// Verify a fake token.
http_request('/oauth2/tokens/djfkjruhrngf-fake-token')
    .always(function () {
        $token.get().done(function () {
            var access_token = $token.access_token();
            // Verify this token.
            http_request('/oauth2/tokens/' + access_token)
                .done(function (response) {
                    console.log(response);
                });
        });
    });
