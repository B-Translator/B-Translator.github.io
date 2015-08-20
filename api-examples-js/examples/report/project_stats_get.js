// GET btr/report/project_stats
http_request('/btr/report/project_stats?origin=vocabulary&project=ICT_sq&lng=sq')
    .done(function(response) {
        console.log(response);
    });
