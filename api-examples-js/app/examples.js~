
$(document).ready(function() {
    // Build the HTML for the accordion by filling
    // the template with the examples data.
    var tmpl = $('#tmpl-examples').html();
    $('#examples')
        .html(Mustache.render(tmpl, example_data));

    // Activate jQuery accordion on #examples.
    $('#examples').accordion({
        active: 1,
        heightStyle: 'content',
    });

    // Load an example when it is clicked.
    $('.example').click(function(){
        // Initialize HTML elements.
        $('#jscode-title').text($(this).text());
        $('#jscode').html('');
        $('#output').html('');

        // Get the example details.
        var jsfile = $(this).attr('jsfile');
        if (!jsfile) {
            alert("Example '" + jsfile + "' not found!");
            return;
        }

        // Add button 'Try on JSBin'.
	var jsbin = $(this).attr('jsbin');
        if (jsbin) {
            $('#jscode-title').append('<a href="http://jsbin.com/' + jsbin + '" target="_blank"><button class="btn">Try on JSBin</button></a>');
        }

        // Add button 'API Reference'.
	var apiref = $(this).attr('apiref');
        if (apiref) {
            $('#jscode-title').append('<a href="http://info.btranslator.org/api/' + apiref + '" target="_blank"><button class="btn">API Reference</button></a>');
        }

        // Fetch the JS file then highlight and display the code.
        $.ajax(jsfile, {dataType: 'text'})
            .done(function (file_content) {
                Rainbow.color(file_content, 'javascript',
                              function(highlighted_code) {
                                  $('#jscode').html(highlighted_code);
                              });
            });

        // Wait 1sec, then fetch the JS file again and execute it.
        setTimeout(function() {
            $.ajax(jsfile, {dataType: 'text'})
                .done(function (file_content) {
                    $.globalEval(file_content);
                });
        }, 1000)
    });
});
