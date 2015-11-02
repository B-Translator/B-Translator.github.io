
/**
 * Examples and their details.
 */
var example_data = {
    groups: [
        {
            group: 'Misc',
            sections: [
                {
                    section: 'latest',
                    examples: [
                        {
                            title: 'GET latest/$lng[/$origin[/$project]]',
                            jsfile: 'misc/latest.js',
                            apiref: '#sec-4-1',
                        },
                    ],
                },
                {
                    section: 'rss-feed',
                    examples: [
                        {
                            title: 'GET rss-feed[/$origin[/$project]]',
                            jsfile: 'misc/rss-feed.js',
                            apiref: '#sec-4-2',
                        },
                    ],
                },
                {
                    section: 'twitter',
                    examples: [
                        {
                            title: 'GET tweet[/$origin[/$project]]',
                            jsfile: 'misc/twitter.js',
                            apiref: '#sec-4-3',
                        },
                    ],
                },
                {
                    section: 'vocabulary',
                    examples: [
                        {
                            title: 'Export Vocabulary',
                            jsfile: 'misc/vocabulary.js',
                            apiref: '#sec-4-4',
                        },
                    ],
                },
                {
                    section: 'autocomplete',
                    examples: [
                        {
                            title: 'Autocomplete',
                            jsfile: 'misc/autocomplete.js',
                            apiref: '#sec-4-5',
                        },
                    ],
                },
            ],
        },
        {
            group: 'Report',
            sections: [
                {
                    section: 'statistics',
                    examples: [
                        {
                            title: 'GET api/report/statistics',
                            jsfile: 'report/statistics_get.js',
                            apiref: '#sec-1-1',
                        },
                        {
                            title: 'POST api/report/statistics',
                            jsfile: 'report/statistics_post.js',
                            apiref: '#sec-1-1',
                        },
                    ],
                },
                {
                    section: 'project_stats',
                    examples: [
                        {
                            title: 'GET api/report/project_stats',
                            jsfile: 'report/project_stats_get.js',
                            apiref: '#sec-1-2',
                        },
                        {
                            title: 'POST api/report/project_stats',
                            jsfile: 'report/project_stats_post.js',
                            apiref: '#sec-1-2',
                        },
                    ],
                },
                {
                    section: 'topcontrib',
                    examples: [
                        {
                            title: 'GET api/report/topcontrib',
                            jsfile: 'report/topcontrib_get.js',
                            apiref: '#sec-1-3',
                        },
                        {
                            title: 'POST api/report/topcontrib',
                            jsfile: 'report/topcontrib_post.js',
                            apiref: '#sec-1-3',
                        },
                    ],
                },
            ],
        },
        {
            group: 'OAuth2',
            sections: [
                {
                    section: 'token',
                    examples: [
                        {
                            title: 'Get a Token',
                            jsfile: 'oauth2/get_token.js',
                            apiref: '#sec-5',
                        },
                        {
                            title: 'Refresh a Token',
                            jsfile: 'oauth2/refresh_token.js',
                            apiref: '#sec-5',
                        },
                        {
                            title: 'Verify a Token',
                            jsfile: 'oauth2/verify_token.js',
                            apiref: '#sec-5',
                        },
                        {
                            title: 'Get Token From Proxy',
                            jsfile: 'oauth2/get_token_from_proxy.js',
                            apiref: '#sec-5',
                        },
                    ],
                },
                {
                    section: 'user/profile',
                    examples: [
                        {
                            title: 'Get the User Profile',
                            jsfile: 'oauth2/get_user_profile.js',
                            apiref: '#sec-5',
                        },
                    ],
                },
            ],
        },
        {
            group: 'Translations',
            sections: [
                {
                    section: 'get_random_sguid',
                    examples: [
                        {
                            title: 'POST api/translations/get_random_sguid',
                            jsfile: 'translations/get_random_sguid.js',
                            apiref: '#sec-2-1',
                        },
                    ],
                },
                {
                    section: 'get',
                    examples: [
                        {
                            title: 'GET api/translations/string_id',
                            jsfile: 'translations/retrieve.js',
                            apiref: '#sec-2-2',
                        },
                        {
                            title: 'POST api/translations/get',
                            jsfile: 'translations/get.js',
                            apiref: '#sec-2-2',
                        },
                    ],
                },
                {
                    section: 'search',
                    examples: [
                        {
                            title: 'GET api/translations',
                            jsfile: 'translations/list.js',
                            apiref: '#sec-2-7',
                        },
                        {
                            title: 'POST api/translations/search',
                            jsfile: 'translations/search.js',
                            apiref: '#sec-2-7',
                        },
                    ],
                },
                {
                    section: 'add',
                    examples: [
                        {
                            title: 'POST api/translations/add',
                            jsfile: 'translations/add.js',
                            apiref: '#sec-2-3',
                        },
                    ],
                },
                {
                    section: 'vote',
                    examples: [
                        {
                            title: 'POST api/translations/vote',
                            jsfile: 'translations/vote.js',
                            apiref: '#sec-2-4',
                        },
                    ],
                },
                {
                    section: 'submit',
                    examples: [
                        {
                            title: 'POST api/translations/submit',
                            jsfile: 'translations/submit.js',
                            apiref: '#sec-2-8',
                        },
                    ],
                },
                {
                    section: 'import',
                    examples: [
                        {
                            title: 'POST api/translations/import',
                            jsfile: 'translations/import.js',
                            apiref: '#sec-2-9',
                        },
                    ],
                },
            ],
        },
        {
            group: 'Project',
            sections: [
                {
                    section: 'subscribe',
                    examples: [
                        {
                            title: 'POST api/project/subscribe',
                            jsfile: 'project/subscribe.js',
                            apiref: '#sec-3-1',
                        },
                    ],
                },
                {
                    section: 'list',
                    examples: [
                        {
                            title: 'POST api/project/list',
                            jsfile: 'project/list.js',
                            apiref: '#sec-3-3',
                        },
                    ],
                },
                {
                    section: 'export',
                    examples: [
                        {
                            title: 'POST api/project/export',
                            jsfile: 'project/export.js',
                            apiref: '#sec-3-5',
                        },
                    ],
                },
                {
                    section: 'import',
                    examples: [
                        {
                            title: 'POST api/project/import',
                            jsfile: 'project/import.js',
                            apiref: '#sec-3-9',
                        },
                    ],
                },
                {
                    section: 'delete',
                    examples: [
                        {
                            title: 'POST api/project/delete',
                            jsfile: 'project/delete.js',
                            apiref: '#sec-3-10',
                        },
                    ],
                },
            ],
        },
        {
            group: 'Vocabulary',
            sections: [
                {
                    section: 'list',
                    examples: [
                        {
                            title: 'GET vocabulary/list',
                            jsfile: 'vocabulary/list.js',
                            apiref: '#sec-4-1',
                        },
                    ],
                },
                {
                    section: 'export',
                    examples: [
                        {
                            title: 'GET vocabulary/export',
                            jsfile: 'vocabulary/export.js',
                            apiref: '#sec-4-1',
                        },
                    ],
                },
                {
                    section: 'add_string',
                    examples: [
                        {
                            title: 'POST api/vocabulary/add_string',
                            jsfile: 'vocabulary/add_string.js',
                            apiref: '#sec-4-1',
                        },
                    ],
                },
                {
                    section: 'import',
                    examples: [
                        {
                            title: 'POST api/vocabulary/import',
                            jsfile: 'vocabulary/import.js',
                            apiref: '#sec-4-1',
                        },
                    ],
                },
                {
                    section: 'delete',
                    examples: [
                        {
                            title: 'POST api/vocabulary/delete',
                            jsfile: 'vocabulary/delete.js',
                            apiref: '#sec-4-1',
                        },
                    ],
                },
	    ],
	},
    ],
};
