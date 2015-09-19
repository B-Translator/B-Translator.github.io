
$(document).ready(function() {
    // Build the HTML for the accordion by filling
    // the template with the examples data.
    var tmpl = $('#tmpl-examples').html();
    var examples_html = Mustache.render(tmpl, example_data);
    $('#examples').html(examples_html);

    // Load an example when it is clicked.
    $('.example').click(load_example);

    // If an example is given in the url as hash, load it automatically.
    var example_file = window.location.hash.slice(1);
    if (example_file) {
	$('[jsfile="' + example_file + '"]').click();
    }
});

// Write a debug message on the output area.
var debug = function(msg) {
    $('#output').append(msg);
};

var load_example = function(){
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
    jsfile = 'examples/' + jsfile;

    // Add button 'Try on JSBin'.
    var jsbin = $(this).attr('jsbin');
    if (jsbin) {
        $('#jscode-title').append('<a href="http://jsbin.com/' + jsbin + '" target="_blank"><button class="btn btn-info btn-xs pull-right">Try on JSBin</button></a>');
    }

    // Add button 'API Reference'.
    var apiref = $(this).attr('apiref');
    if (apiref) {
        $('#jscode-title').append('<a href="http://info.btranslator.org/api/' + apiref + '" target="_blank"><button class="btn btn-info btn-xs pull-right">API Reference</button></a>');
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

    // Scroll to the section that tries examples.
    $('html, body').animate({
        scrollTop: $("#try").offset().top
    }, 1000);
};
