
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

    // Scroll to the top when the "up" button is clicked.
    $("a[href='#top']").click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'fast');
        return false;
    });
});

// Write a debug message on the output area.
var debug = function(msg) {
    $('#output').append(msg);
};

var load_example = function(){
    // Initialize HTML elements.
    $('#jscode-title').text($(this).text());
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
        var button_try = '<a href="http://jsbin.com/' + jsbin + '" target="_blank"><button class="btn btn-info btn-xs pull-right">JSBin</button></a>';
        $('#jscode-title').append(button_try);
    }

    // Add button 'API Reference'.
    var apiref = $(this).attr('apiref');
    if (apiref) {
        var button_api = '<a href="http://info.btranslator.org/api/' + apiref + '" target="_blank"><button class="btn btn-info btn-xs pull-right">API</button></a>';
        $('#jscode-title').append(button_api);
    }

    // Fetch the JS file then highlight and display the code.
    $.ajax(jsfile, {dataType: 'text'})
        .done(function (file_content) {
	    editor.getSession().setValue(file_content);
        });

    // Wait 1sec, then fetch the JS file again and execute it.
    setTimeout(function() {
        $.ajax(jsfile, {dataType: 'text'})
            .done(function (file_content) {
                $.globalEval(file_content);
            });

        // Scroll to the section that display and runs the examples.
        setTimeout(function() {
            $('html, body').animate({
                scrollTop: $('#try').offset().top - 50
            }, 500);
        }, 500);
    }, 500)
};
