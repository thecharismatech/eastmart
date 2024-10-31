from odoo import models, fields, api
from odoo.exceptions import ValidationError

class PosPayment(models.Model):
    _inherit = 'pos.payment'

    transaction_number = fields.Char(string='Transaction Number')

    @api.constrains('transaction_number')
    def _check_transaction_number(self):
        for payment in self:
            if payment.transaction_number:
                existing_payment = self.search([
                    ('transaction_number', '=', payment.transaction_number),
                    ('id', '!=', payment.id)
                ], limit=1)
                if existing_payment:
                    raise ValidationError('Transaction number must be unique!')
