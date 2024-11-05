from odoo import models, fields, api, _
from odoo.exceptions import ValidationError
import re

class PosPayment(models.Model):
    _inherit = 'pos.payment'

    transaction_id = fields.Char(string='Transaction ID', size=6)

    @api.constrains('transaction_id')
    def _check_transaction_id(self):
        for payment in self:
            if payment.payment_method_id.use_payment_terminal and payment.transaction_id:
                if not re.match('^\d{6}$', payment.transaction_id):
                    raise ValidationError(_('Transaction ID must be exactly 6 digits.'))

    def _validate_transaction(self):
        try:
            if self.payment_method_id.use_payment_terminal and not self.transaction_id:
                raise ValidationError(_('Transaction ID is required for card payments.'))
        except Exception as e:
            raise ValidationError(_('Payment validation error: %s') % str(e))
