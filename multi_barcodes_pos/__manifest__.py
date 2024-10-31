# -*- coding: utf-8 -*-#
{
    'name': 'POS Product Multi Barcode',
    'version': '18.0.0.0.1',
    'category': 'Point of Sale',
    'summary': """Allows to create multiple barcode for a single product""",
    'description': """This module allows you to set multiple barcodes for a 
     product and product varients""",
    'author': 'Mahmoud Osama, Maxmatech',
    'company': 'Maxmatech',
    'maintainer': 'Mahmoud Osama, Maxmatech',
    'website': 'https://www.maxmatech.com/',
    'depends': ['product', 'point_of_sale', 'web'],
    'data': [
        'security/ir.model.access.csv',
        'views/product_template_views.xml',
        'views/product_product_views.xml'
    ],
    'assets': {
        'point_of_sale._assets_pos': [
            'multi_barcodes_pos/static/src/js/PosStore.js',
            'multi_barcodes_pos/static/src/js/pos_scan.js',
            'multi_barcodes_pos/static/src/js/ProductWidget.js'
        ],
    },
    'images': ['static/description/banner.jpg'],
    'license': 'AGPL-3',
    'installable': True,
    'auto_install': False,
    'application': False,
}
