// GET public/btr/report/project_stats
http_request('/public/btr/report/project_stats?origin=vocabulary&project=ICT_sq&lng=sq')
    .done(function(response) {
        console.log(response);
    });
