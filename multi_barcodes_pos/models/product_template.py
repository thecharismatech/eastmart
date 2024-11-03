from odoo import fields, models

class ProductTemplate(models.Model):
    _inherit = 'product.template'

    multi_barcode = fields.One2many('product.barcode', 'product_tmpl_id', string='Additional Barcodes')
