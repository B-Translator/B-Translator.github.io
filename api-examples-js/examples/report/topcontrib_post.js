// POST api/report/topcontrib
http_request('/api/report/topcontrib', {
    type: 'POST',
    data: {
        lng: 'sq',
        period: 'week',
    },
});
