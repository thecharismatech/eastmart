{
    'name': 'POS Access Right',
    'version': "18.0.1.0.0",
    "category": 'Point of Sale',
    'summary': 'To Restrict POS features for cashiers',
    'description': 'This app allows you to enable or disable POS features '
                   'depending on the access rights granted to the cashiers',
    'author': 'Mahmoud Osama',
    'company': 'MaxMatech',
    'maintainer': 'Mahmoud Osama',
    'website': 'https://www.maxmatech.com/',
    'depends': ['pos_hr'],
    'data': [
        'views/hr_employee_views.xml',
    ],
    'assets': {
        'point_of_sale._assets_pos': [
            'pos_access_right_hr/static/src/js/PosStore.js',
            'pos_access_right_hr/static/src/js/ActionpadWidget.js',
            'pos_access_right_hr/static/src/js/ProductScreen.js',
            'pos_access_right_hr/static/src/xml/ActionpadWidget.xml'
        ],
    },
    'images': ['static/description/banner.jpg'],
    'license': 'AGPL-3',
    'installable': True,
    'auto_install': False,
    'application': False,
}
