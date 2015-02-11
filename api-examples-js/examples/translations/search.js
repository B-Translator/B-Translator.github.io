// POST public/btr/translations/search
http_request('/public/btr/translations/search', {
    type: 'POST',
    data: {
        lng: 'sq',
        words: 'file',
        page: 2,
    },
});
