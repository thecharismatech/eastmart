﻿{
    'name': 'POS Payment Transaction Number',
    'version': '18.0.1.0.0',
    'category': 'Point of Sale',
    'summary': 'Add transaction numbers to POS payment methods',
    'description': """
        This module adds transaction number functionality to payment methods in POS:
        * Adds transaction number field to pos.payment
        * Validates transaction numbers
        * Shows transaction number in POS interface
        * Includes transaction number in receipts
    """,
    'author': 'Mahmoud Osama',
    'company': 'Maxmatech',
    'website': 'https://www.maxmatech.com',
    'depends': ['point_of_sale'],
    'data': [
        'security/ir.model.access.csv',
        'views/pos_payment_views.xml',
    ],
    'assets': {
        'point_of_sale.assets': [
            'pos_payment_transaction/static/src/js/models.js',
            'pos_payment_transaction/static/src/js/PaymentScreen.js',
            'pos_payment_transaction/static/src/xml/pos_payment_transaction.xml',
        ],
    },
    'license': 'LGPL-3',
    'installable': True,
    'auto_install': False,
    'application': False,
}
