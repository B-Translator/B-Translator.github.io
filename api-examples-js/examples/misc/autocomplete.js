// Autocomplete strings.
var url = 'https://btranslator.org/translations/autocomplete/string/vocabulary/ICT_sq/a';
http_request(url).done(function () {
    // Autocomplete strings with project and origin wildcards.
    var url = 'https://btranslator.org/translations/autocomplete/string/*/*/b';
    http_request(url).done(function () {
        // Autocomplete projects.
        var url = 'https://btranslator.org/translations/autocomplete/project/kd';
        http_request(url).done(function () {
            // Autocomplete origins of projects.
            var url = 'https://btranslator.org/translations/autocomplete/origin/G';
            http_request(url).done(function () {
                // Autocomplete users.
                var url = 'https://btranslator.org/translations/autocomplete/user/sq/d';
                http_request(url);
            });
        });
    });
});

