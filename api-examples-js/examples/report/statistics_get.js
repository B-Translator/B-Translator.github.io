// GET public/btr/report/statistics
http_request('/public/btr/report/statistics?lng=sq')
    .done(function(response) {
        console.log(response);
    });
