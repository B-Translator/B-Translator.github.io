// POST api/report/project_stats
http_request('/api/report/project_stats', {
    type: 'POST',
    data: {
	origin: 'vocabulary',
	project: 'ICT_sq',
	lng: 'sq',
    },
});
