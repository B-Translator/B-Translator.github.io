
// Actions that will be submitted.
var actions = [
    { 
        action: 'add',
        params: { 
            sguid: 'd66b0fc286b887e9242ee1e6b777522f067f92af',
            lng: 'sq',
            translation: 'Test translation.',
        },
    },
    { 
        action: 'vote',
        params: { tguid: '40af5f58a7d1211c0cb5950d0b36b21c06cf50e6' },
    },
    { 
        action: 'del',
        params: { tguid: 'test-f58a7d1211c0cb5950d0b36b21c06cf50e6' },
    },
    { 
        action: 'del_vote',
        params: { tguid: 'test-f58a7d1211c0cb5950d0b36b21c06cf50e6' },
    },
    { 
        action: 'add',
        params: { 
            sguid: 'd68b68585ee36d0bcda3dd3fd6eb4ebc2cdcbcbd',
            lng: 'sq',
            translation: '',
        },
    },
];

var $token = new OAuth2.Token($oauth2_settings);

var submit_actions = function () {
    // Get an access_token.
    var access_token = $token.access_token();
    if (!access_token) {
        $token.get().done(submit_actions);
        return;
    }

    // POST btr/translations/submit
    http_request('/btr/translations/submit', {
        type: 'POST',
        data: actions,
        headers: { 'Authorization': 'Bearer ' + access_token }
    });
}

// Call the function.
submit_actions();
