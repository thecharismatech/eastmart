from odoo import fields, models

class ProductProduct(models.Model):
    _inherit = 'product.product'

    product_multi_barcodes_ids = fields.One2many(
        'multi.barcode.products',
        'product_multi_id',
        string='Additional Barcodes',
        help='Additional barcodes for this product variant'
    )