{
    'name': 'POS Multi Barcodes',
    'version': '18.0.1.0.0',
    'depends': ['point_of_sale'],
    "category": "Point of Sale",
    "data": [
        "security/ir.model.access.csv",
        "views/product_views.xml",
    ],
    "license": "LGPL-3",
    "assets": {
        "point_of_sale.assets": [
            "multi_barcodes_pos/static/src/js/pos_store.js"
        ]
    },
    "installable": True,
}
