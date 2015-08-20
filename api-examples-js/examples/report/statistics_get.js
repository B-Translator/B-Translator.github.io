// GET btr/report/statistics
http_request('/btr/report/statistics?lng=sq')
    .done(function(response) {
        console.log(response);
    });
