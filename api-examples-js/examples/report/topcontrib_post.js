// POST public/btr/report/topcontrib
http_request('/public/btr/report/topcontrib', {
    type: 'POST',
    data: {
        lng: 'sq',
        period: 'week',
    },
});
