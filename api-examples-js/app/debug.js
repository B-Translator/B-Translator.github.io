
// Write a debug message on the output area.
var debug = function(msg) {
    $('#output').append(msg);
};

/**
 * Extend the function http_request()
 * to output debug information as well.
 */
var make_http_request = http_request;
var http_request = function(url, settings) {
    // If parameter settings is not given, assign a default value.
    var settings = settings || {};

    // Output some debug info before making the request.
    settings.beforeSend = function() {
        var str_settings = JSON.stringify(settings, undefined, 4);
        debug("\n------------ start http_request -----------------"
              + "\n===> URL: " + url
              + "\n===> SETTINGS:\n" + str_settings);
        return true;
    };

    // Make the request and display some
    // debug info when the request is finished.
    var request = make_http_request(url, settings);
    request.done(function(response) {
        debug("\n===> RESULT:\n" + JSON.stringify(response, undefined, 4));
    });
    request.fail(function(jqXHR, textStatus, errorThrown) {
        debug("\n===> ERROR " + jqXHR.status + ': ' + errorThrown);
	console.log(errorThrown);
    });
    request.always(function(){
        debug("\n------------ end http_request -----------------\n");
    });

    return request;
}
