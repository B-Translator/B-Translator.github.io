// POST btr/translations/search
http_request('/btr/translations/search', {
    type: 'POST',
    data: {
        lng: 'sq',
        words: 'file',
        page: 2,
    },
});
