{
    'name': 'POS Transaction ID Validation',
    'version': '18.0.1.0.0',
    'category': 'Point of Sale',
    'summary': 'Validates transaction ID in POS payments',
    'description': '''
        This module adds transaction ID validation in POS card payments.
        Requires exactly 6 numbers when validating card payments.
        Compatible with Odoo 18.0 Enterprise and Community editions.
    ''',
    'author': 'Mahmoud Osama',
    'company': 'MaxmaTech',
    'website': 'https://maxmatech.com',
    'license': 'LGPL-3',
    'depends': [
        'point_of_sale',
        'base',
        'web',
    ],
    'data': [
        'security/ir.model.access.csv',
        'views/pos_assets.xml',
        'views/pos_config_view.xml',
    ],
    'assets': {
        'point_of_sale.assets': [
            'pos_transaction_validate/static/src/js/payment_screen.js',
            'pos_transaction_validate/static/src/xml/payment_screen.xml',
        ],
        'web.assets_backend': [
            'pos_transaction_validate/static/src/js/payment_screen.js',
        ],
    },
    'images': ['static/description/icon.png'],
    'installable': True,
    'auto_install': False,
    'application': False,
    'sequence': 1,
}
