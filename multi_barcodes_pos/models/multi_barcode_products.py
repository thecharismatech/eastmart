from odoo import fields, models, api

class MultiBarcodeProducts(models.Model):
    _name = 'multi.barcode.products'
    _description = 'For creating multiple Barcodes for products'

    multi_barcode = fields.Char(
        string="Barcode",
        help="Provide alternate barcodes for this product",
        index=True  # Added index for better performance
    )
    product_multi_id = fields.Many2one(
        'product.product',
        string="Product",
        help="Multi Barcode Product",
        ondelete='cascade'  # Added cascade deletion
    )
    template_multi_id = fields.Many2one(
        'product.template',
        string="Product",
        help="Product with Multi Barcode",
        ondelete='cascade'  # Added cascade deletion
    )

    _sql_constraints = [
        ('field_unique', 'unique(multi_barcode)',
         'This barcode already exists! Barcodes must be unique.')
    ]

    @api.model
    def get_barcode_val(self, barcode):
        """Returns barcode of record in self and product id"""
        temp = self.search([('multi_barcode', '=', barcode)], limit=1)
        return temp.multi_barcode, temp.product_multi_id.id