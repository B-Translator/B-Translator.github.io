
var $token = new OAuth2.Token($config.oauth2);

// Function for adding a new translation.
var add_translation = function (sguid, lng, new_translation) {
    // Get an access_token.
    var access_token = $token.access_token();
    if (!access_token) {
        $token.get().done(function () {
            add_translation(sguid, lng, new_translation);
        });
        return;
    }

    // POST btr/translations/add
    var request = http_request('/btr/translations/add', {
        type: 'POST',
        data: {
            sguid: sguid,
            lng: lng,
            translation: new_translation,
        },
        headers: {
            'Authorization': 'Bearer ' + access_token,
        },
    });

    // After adding the translation retrieve the string to check it.
    request.done(function (response) {
        // Get the id of the added translation.
        tguid = response.tguid;

        var url = '/public/btr/translations/' + sguid + '?lng=sq';
        var request = http_request(url);
        
        // Now delete the translation.
        request.done(function () {
            http_request('/btr/translations/del', {
                type: 'POST',
                data: { tguid: tguid },
                headers: { 'Authorization': 'Bearer ' + access_token },
            });
        });
    });
};

/******************************************************/

// Add a new translation for a string.
var sguid = '2a12b39f41bbd1ac78fdf456c25a480d2060c06b';
var lng = 'sq';
var new_translation = 'test-translation-' + Math.floor(Math.random() * 10);
add_translation(sguid, lng, new_translation);
