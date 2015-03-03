
var $token = new OAuth2.Token($config.oauth2);

var add_vote = function (sguid, tguid) {
    // Get an access_token.
    var access_token = $token.access_token();
    if (!access_token) {
        $token.get().done(function () {
            add_vote(sguid, tguid);
        });
        return;
    }

    // POST btr/translations/vote
    http_request('/btr/translations/vote', {
        type: 'POST',
        data: { tguid: tguid },
        headers: { 'Authorization': 'Bearer ' + access_token }
    }).done(function () {
        // Retrive the string and check that the translation has been voted.
        var url = '/public/btr/translations/' + sguid + '?lng=sq';
        http_request(url).done(function () {
            // POST btr/translations/del_vote
            http_request('/btr/translations/del_vote', {
                type: 'POST',
                data: { tguid: tguid },
                headers: { 'Authorization': 'Bearer ' + access_token }
            });
        });
    });
};

// Get a random translated string an add a vote to the first translation.
var url = '/public/btr/translations/translated?lng=sq';
http_request(url).done(function(result){
    var sguid = result.string.sguid;
    var tguid = result.string.translations[0].tguid;
    add_vote(sguid, tguid);
});
