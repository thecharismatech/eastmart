from odoo import fields, models

class MultiBarcode(models.Model):
    _name = "multi.barcode"
    _description = "Multiple Barcodes for Products"
    _rec_name = "barcode"

    barcode = fields.Char(string="Barcode", required=True)
    product_id = fields.Many2one("product.product", string="Product")
    product_tmpl_id = fields.Many2one("product.template", string="Product Template")

class ProductTemplate(models.Model):
    _inherit = "product.template"
    
    barcode_ids = fields.One2many("multi.barcode", "product_tmpl_id", string="Additional Barcodes")

class ProductProduct(models.Model):
    _inherit = "product.product"
    _barcode_cache = {}

    barcode_ids = fields.One2many("multi.barcode", "product_id", string="Additional Barcodes")

    def get_all_barcodes(self):
        self.ensure_one()
        cache_key = f'product_barcodes_{self.id}'
        
        if cache_key in self._barcode_cache:
            return self._barcode_cache[cache_key]
            
        barcodes = []
        if self.barcode:
            barcodes.append(self.barcode)
        barcodes.extend(self.barcode_ids.mapped("barcode"))
        
        self._barcode_cache[cache_key] = barcodes
        return barcodes