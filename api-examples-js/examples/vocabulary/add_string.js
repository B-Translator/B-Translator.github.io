
var $token = new OAuth2.Token($config.oauth2);

// Function for adding a new string.
var add_string = function () {
    // Get an access_token.
    var access_token = $token.access_token();
    if (!access_token) {
        $token.get().done(add_string);
        return;
    }

    // POST api/vocabulary/add_string
    var url = '/api/vocabulary/add_string';
    var settings = {
        type: 'POST',
        data: {
            name: 'ICT',
            lng: 'sq',
            string: 'Test string ' + Math.floor(Math.random() * 10),
        },
        headers: {
            'Authorization': 'Bearer ' + access_token,
        },

    };
    http_request(url, settings).done(function (result) {
        // Retrive the string.
        var sguid = result.sguid;
        var url = '/api/translations/' + sguid + '?lng=sq';
        http_request(url).done(function () {
            // Delete the string that was added above.
            http_request('/api/vocabulary/del_string', {
                type: 'POST',
                data: {
		    name: 'ICT',
		    lng: 'sq',
		    sguid: sguid,
		},
                headers: { 'Authorization': 'Bearer ' + access_token },
            });
        });
    });
};

add_string();
