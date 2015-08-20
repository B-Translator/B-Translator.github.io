// POST api/translations/search
http_request('/api/translations/search', {
    type: 'POST',
    data: {
        lng: 'sq',
        words: 'file',
        page: 2,
    },
});
