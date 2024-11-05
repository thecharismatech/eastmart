# Copyright © from 2018 Garazd Creation (https://garazd.biz)
# @author: Yurii Razumovskyi (support@garazd.biz)
# License LGPL-3.0 or later (https://www.gnu.org/licenses/lgpl-3.0.html).

from odoo import fields, models


class ResUsers(models.Model):
    _inherit = 'res.users'

    pos_config_ids = fields.Many2many(
        comodel_name='pos.config',
        string='Allowed POS',
        help="Allowed Points of Sales for the user. POS managers don't have restrictions and can use all POS.",
    )

    def write(self, values):
        res = super(ResUsers, self).write(values)
        if self.ids and 'pos_config_ids' in values:
            self.env.registry.clear_cache()
        return res
