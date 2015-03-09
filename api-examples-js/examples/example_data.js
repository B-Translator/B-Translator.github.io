
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
                            title: 'GET translations/latest/$lng[/$origin[/$project]]',
                            jsfile: 'misc/latest.js',
                            apiref: '#sec-4.1',
                            jsbin: 'lofaciyewu/1/edit?js',
                        },
                    ],
                },
                {
                    section: 'rss-feed',
                    examples: [
                        {
                            title: 'GET translations/rss-feed[/$origin[/$project]]',
                            jsfile: 'misc/rss-feed.js',
                            apiref: '#sec-4.2',
                            jsbin: 'kazamajope/1/edit?js',
                        },
                    ],
                },
                {
                    section: 'twitter',
                    examples: [
                        {
                            title: 'GET translations/twitter[/$origin[/$project]]',
                            jsfile: 'misc/twitter.js',
                            apiref: '#sec-4.3',
                            jsbin: 'sunuxekefa/1/edit?js',
                        },
                    ],
                },
                {
                    section: 'vocabulary',
                    examples: [
                        {
                            title: 'Export Vocabulary',
                            jsfile: 'misc/vocabulary.js',
                            apiref: '#sec-4.4',
                            jsbin: 'motajoyohe/1/edit?js',
                        },
                    ],
                },
                {
                    section: 'autocomplete',
                    examples: [
                        {
                            title: 'Autocomplete',
                            jsfile: 'misc/autocomplete.js',
                            apiref: '#sec-4.5',
                            jsbin: 'muwewacowo/1/edit?js',
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
                            title: 'GET public/btr/report/statistics',
                            jsfile: 'report/statistics_get.js',
                            apiref: '#sec-1.1',
                            jsbin: 'suranakolo/1/edit?js,output',
                        },
                        {
                            title: 'POST public/btr/report/statistics',
                            jsfile: 'report/statistics_post.js',
                            apiref: '#sec-1.1',
                            jsbin: 'pipaqabocu/1/edit?js,output',
                        },
                    ],
                },
                {
                    section: 'topcontrib',
                    examples: [
                        {
                            title: 'GET public/btr/report/topcontrib',
                            jsfile: 'report/topcontrib_get.js',
                            apiref: '#sec-1.2',
                            jsbin: 'kikoxuqero/1/edit?js,output',
                        },
                        {
                            title: 'POST public/btr/report/topcontrib',
                            jsfile: 'report/topcontrib_post.js',
                            apiref: '#sec-1.2',
                            jsbin: 'miyonixici/1/edit?js,output',
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
                            apiref: '',
                            jsbin: 'sutafalabe/1/edit?js',
                        },
                        {
                            title: 'Refresh a Token',
                            jsfile: 'oauth2/refresh_token.js',
                            apiref: '',
                            jsbin: 'gisifojute/1/edit?js',
                        },
                        {
                            title: 'Verify a Token',
                            jsfile: 'oauth2/verify_token.js',
                            apiref: '',
                            jsbin: 'bolayeqamu/1/edit?js,output',
                        },
                        {
                            title: 'Get Token From Proxy',
                            jsfile: 'oauth2/get_token_from_proxy.js',
                            apiref: '',
                            jsbin: 'yaxipapiya/1/edit?js',
                        },
                    ],
                },
                {
                    section: 'user/profile',
                    examples: [
                        {
                            title: 'Get the User Profile',
                            jsfile: 'oauth2/get_user_profile.js',
                            apiref: '',
                            jsbin: 'morosifoyu/1/edit?js,output',
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
                            title: 'POST public/btr/translations/get_random_sguid',
                            jsfile: 'translations/get_random_sguid.js',
                            apiref: '#sec-2.1',
                            jsbin: 'dekiqehosu/1/edit?js,output',
                        },
                    ],
                },
                {
                    section: 'get',
                    examples: [
                        {
                            title: 'GET public/btr/translations/string_id',
                            jsfile: 'translations/retrieve.js',
                            apiref: '#sec-2.2',
                            jsbin: 'kolodenezu/1/edit?js',
                        },
                        {
                            title: 'POST public/btr/translations/get',
                            jsfile: 'translations/get.js',
                            apiref: '#sec-2.2',
                            jsbin: 'huyirafoxi/1/edit?js',
                        },
                    ],
                },
                {
                    section: 'search',
                    examples: [
                        {
                            title: 'GET public/btr/translations',
                            jsfile: 'translations/list.js',
                            apiref: '#sec-2.7',
                            jsbin: 'qedegepiqa/1/edit?js',
                        },
                        {
                            title: 'POST public/btr/translations/search',
                            jsfile: 'translations/search.js',
                            apiref: '#sec-2.7',
                            jsbin: 'jaxawarege/1/edit?js',
                        },
                    ],
                },
                {
                    section: 'add',
                    examples: [
                        {
                            title: 'POST btr/translations/add',
                            jsfile: 'translations/add.js',
                            apiref: '#sec-2.3',
                            jsbin: 'lequqohemo/1/edit?js',
                        },
                    ],
                },
                {
                    section: 'vote',
                    examples: [
                        {
                            title: 'POST btr/translations/vote',
                            jsfile: 'translations/vote.js',
                            apiref: '#sec-2.4',
                            jsbin: 'dotapuvice/1/edit?js',
                        },
                    ],
                },
                {
                    section: 'submit',
                    examples: [
                        {
                            title: 'POST btr/translations/submit',
                            jsfile: 'translations/submit.js',
                            apiref: '#sec-2.8',
                            jsbin: 'zimajujebe/1/edit?js',
                        },
                    ],
                },
                {
                    section: 'import',
                    examples: [
                        {
                            title: 'POST btr/translations/import',
                            jsfile: 'translations/import.js',
                            apiref: '#sec-2.9',
                            jsbin: 'zewiyacido/1/edit?js',
                        },
                    ],
                },
            ],
        },
        {
            group: 'Project',
            sections: [
                {
                    section: 'list',
                    examples: [
                        {
                            title: 'POST btr/project/list',
                            jsfile: 'project/list.js',
                            apiref: '#sec-3.1',
                            jsbin: 'hogatomaqa/1/edit?js,output',
                        },
                    ],
                },
                {
                    section: 'add_string',
                    examples: [
                        {
                            title: 'POST btr/project/add_string',
                            jsfile: 'project/add_string.js',
                            apiref: '#sec-3.4',
                            jsbin: 'zubusidica/1/edit?js',
                        },
                    ],
                },
                {
                    section: 'export',
                    examples: [
                        {
                            title: 'POST btr/project/export',
                            jsfile: 'project/export.js',
                            apiref: '#sec-3.2',
                            jsbin: 'saqiqezeho/1/edit?js,output',
                        },
                    ],
                },
                {
                    section: 'import',
                    examples: [
                        {
                            title: 'POST btr/project/import',
                            jsfile: 'project/import.js',
                            apiref: '#sec-3.6',
                            jsbin: 'bocazoqopu/1/edit?js',
                        },
                    ],
                },
            ],
        },
    ],
};
