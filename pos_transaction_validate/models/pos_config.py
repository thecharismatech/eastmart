from odoo import models, fields, api

class PosConfig(models.Model):
    _inherit = 'pos.config'

    require_transaction_id = fields.Boolean(
        string='Require Transaction ID',
        default=True,
        help='Require transaction ID for card payments'
    )
