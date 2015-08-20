// POST btr/report/project_stats
http_request('/btr/report/project_stats', {
    type: 'POST',
    data: {
	origin: 'vocabulary',
	project: 'ICT_sq',
	lng: 'sq',
    },
});
