from odoo import models, fields, api
from odoo.exceptions import ValidationError

class POSPayment(models.Model):
    _inherit = 'pos.payment'

    transaction_number = fields.Char(
        string='Transaction Number',
        size=6,
        required=True,
        index=True
    )

    _sql_constraints = [
        ('unique_transaction',
         'unique(transaction_number)',
         'Transaction number must be unique')
    ]    
    @api.constrains('transaction_number')
    def _check_transaction_number(self):
        for payment in self:
            if payment.transaction_number and not payment.transaction_number.isdigit():
                raise ValidationError('Transaction number must contain only digits')
            if payment.transaction_number and len(payment.transaction_number) != 6:
                raise ValidationError('Transaction number must be 6 digits')

@api.model
def create(self, vals):
    if vals.get('transaction_number'):
        vals['transaction_number'] = vals['transaction_number'].zfill(6)
    return super().create(vals)
