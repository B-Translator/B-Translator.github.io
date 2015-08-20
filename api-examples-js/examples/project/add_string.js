
var $token = new OAuth2.Token($config.oauth2);

// Function for adding a new string.
var add_string = function () {
    // Get an access_token.
    var access_token = $token.access_token();
    if (!access_token) {
        $token.get().done(add_string);
        return;
    }

    // POST btr/project/add_string
    var url = '/btr/project/add_string';
    var settings = {
        type: 'POST',
        data: {
            origin: 'test',
            project: 'pingus',
            string: 'Test string ' + Math.floor(Math.random() * 10),
        },
        headers: {
            'Authorization': 'Bearer ' + access_token,
        },

    };
    http_request(url, settings).done(function (result) {
        // Retrive the string.
        var sguid = result.sguid;
        var url = '/btr/translations/' + sguid + '?lng=sq';
        http_request(url).done(function () {
            // Delete the string that was added above.
            http_request('/btr/project/del_string', {
                type: 'POST',
                data: {
		    sguid: sguid,
		    project: 'pingus',
		    origin: 'test',
		},
                headers: { 'Authorization': 'Bearer ' + access_token },
            });
        });
    });
};

add_string();
