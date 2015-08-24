var download = function (url) {
    debug('Download: <a href="' + url + '">' + url + "</a>\n");
};

// Download as a text list (in different formats).
download('https://btranslator.org/vocabulary/export/ICT_sq/txt1');
download('https://btranslator.org/vocabulary/export/ICT_sq/txt2');
download('https://btranslator.org/vocabulary/export/ICT_sq/org');

// Get in JSON format.
http_request('https://btranslator.org/vocabulary/export/ICT_sq');
