// Write a debug message on the output area.
var debug = function(msg) {
    $('#output').append(msg);
};

$(document).ready(function() {
    $('#examples').accordion({
        active: 1,
        heightStyle: 'content',
    });

    // Load an example when it is clicked.
    $('.example').click(function(){
        // Initialize HTML elements.
        $('#jscode-title').html('Example Code');
        $('#jscode').html('');
        $('#output').html('');

        // Get the example details.
	var id = this.id
        if (example_list[id]) {
	    var example = example_list[id];
	}
	else {
	    alert("Example '" + id + "' not found!");
	    return;
	}

        // Add button 'Try on JSBin'.
	if (example.jsbin) {
	    $('#jscode-title').append('<a href="http://jsbin.com/' + example.jsbin + '" target="_blank"><button class="btn">Try on JSBin</button></a>');
	}

        // Add button 'API Reference'.
	if (example.apiref) {
	    $('#jscode-title').append('<a href="http://info.btranslator.org/api/' + example.apiref + '" target="_blank"><button class="btn">API Reference</button></a>');
	}

        // Fetch and execute the JS file, 
        // then highlight and display the code.
        $.get(example.jsfile, 'script')
            .done(function (file_content) {
                Rainbow.color(file_content, 'javascript',
			      function(highlighted_code) {
				  $('#jscode').html(highlighted_code);
			      });
            });
    });
});
