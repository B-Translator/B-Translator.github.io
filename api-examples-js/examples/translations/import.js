
var lng = 'sq';
var fileSelector = $('<input type="file" />');

fileSelector.on('change',
	function(event) {
	    var fd = new FormData();
	    fd.append('lng', lng);
	    fd.append('file', event.target.files[0]);

	    // Make an http request for uploading the file.
	    http_request(base_url +  '/btr/translations/import', {
		method: 'POST',
		headers: {
		    'Authorization': 'Bearer ' + get_access_token(oauth2),
		},
		data: fd,
		processData: false,
		contentType: false,
	    });
        });

fileSelector.click();
