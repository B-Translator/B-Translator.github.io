// Write a debug message on the output area.
var debug = function(msg) {
    $('#output').append(msg);
};

$(document).ready(function() {
    $('#examples' ).accordion({
        active: 1,
        heightStyle: 'content',
    });

    // Load an example when it is clicked.
    $('.example').click(function(){
        $('#jscode').html('');
        $('#output').html('');

        var filename = this.id + '.js';
        $.get(filename, 'script')
            .done(function (file_content) {
                Rainbow.color(file_content, 'javascript',
			      function(highlighted_code) {
				  $('#jscode').html(highlighted_code);
			      });
            });
    });
});
