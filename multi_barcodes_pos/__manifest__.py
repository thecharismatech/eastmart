{
    'name': 'POS Product Multi Barcode',
    'version': '18.0.0.0.1',
    'category': 'Point of Sale',
    'summary': """Allows to create multiple barcode for a single product""",
    'description': """This module allows you to set multiple barcodes for a 
     product and product variants""",
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
        'web.assets_backend': [
            'multi_barcodes_pos/static/src/js/**/*',
        ],
        'point_of_sale.assets': [
            'multi_barcodes_pos/static/src/js/pos_scan.js',
            'multi_barcodes_pos/static/src/js/ProductWidget.js',
            'multi_barcodes_pos/static/src/js/PosStore.js',
        ],
    },
    'images': ['static/description/banner.jpg'],
    'license': 'AGPL-3',
    'installable': True,
    'auto_install': False,
    'application': False,
}