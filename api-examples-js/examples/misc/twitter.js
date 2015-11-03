var link_to = function (url) {
    debug('<li>Click: <a href="' + url + '" target="_blank">' + url + "</a></li>");
};

// Get a random tweet.
link_to('https://l10n.org.al/btr/tweet');
link_to('https://l10n.org.al/btr/tweet/vocabulary/ICT_sq');

link_to('https://btranslator.net/btr/tweet/vocabulary/ICT_sq/sq');

link_to('https://btranslator.org/tweet/sq');
link_to('https://btranslator.org/tweet/sq/vocabulary/ICT_sq');

http_request('https://btranslator.org/tweet/sq',
             { headers: { 'Accept': 'application/json'}});
