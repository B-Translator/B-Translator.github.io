// Autocomplete strings.
var url = 'https://btranslator.org/auto/string/vocabulary/ICT_sq/a';
http_request(url).done(function () {
    // Autocomplete strings with project and origin wildcards.
    var url = 'https://btranslator.org/auto/string/*/*/b';
    http_request(url).done(function () {
        // Autocomplete projects.
        var url = 'https://btranslator.org/auto/project/kd';
        http_request(url).done(function () {
            // Autocomplete origins of projects.
            var url = 'https://btranslator.org/auto/origin/G';
            http_request(url).done(function () {
                // Autocomplete users.
                var url = 'https://btranslator.org/auto/user/sq/d';
                http_request(url);
            });
        });
    });
});

