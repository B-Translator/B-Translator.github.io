
/**
 * Make an HTTP request to the given URL.
 *
 * Similar to $.ajax(url, settings) (in fact it calls it internally).
 *
 * @param String url
 *   A string containing the URL to which the request is sent.
 *
 * @param PlainObject settings
 *   A set of key/value pairs that configure the Ajax request.
 *
 *   - method :: (String, default: 'GET')
 *       The type of request to make ('GET' or 'PUT').
 *
 *   - data :: (PlainObject or String or Array)
 *       Data to be sent to the server. It is converted to a query
 *       string, if not already a string. It's appended to the url for
 *       GET-requests. Object must be Key/Value pairs.
 *
 *   - headers :: (PlainObject, default: {})
 *       An object of additional header key/value pairs to send along
 *       with requests.
 *
 *   - beforeSend :: (Function)
 *       A pre-request callback function.
 *
 *   - async :: (Boolean, default: true)
 *       If you need synchronous requests, set this option to false.
 *
 *   - processData :: (Boolean, default: true)
 *       When uploading files we need to set this to false.
 *
 *   - contentType :: (String, default: 'application/x-www-form-urlencoded; charset=UTF-8')
 *       When uploading files we need to set this to false.
 *
 * @return
 *   jqXHR object, just like $.ajax()
 */
var http_request = function(url, settings) {
    // If parameter settings is not given, assign a default value.
    var settings = settings || {};

    // Set the parameters of the ajax request.
    var ajax_params = {
        url: url,
        type: settings.method || 'GET',
        data: settings.data,
        headers: settings.headers,
        dataType: 'json',
        async: settings.async,
    };
    if (settings.beforeSend) {
	ajax_params.beforeSend = settings.beforeSend;
    };

    // The parameters processData and contentType
    // need to be set to false when uploading files.
    if (settings.processData === false) {
	ajax_params.processData = false;
    };
    if (settings.contentType === false) {
	ajax_params.contentType = false;
    };

    // Make the request and return the result.
    return $.ajax(ajax_params);
}
