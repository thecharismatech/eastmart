#############################################################################
#
#    Cybrosys Technologies Pvt. Ltd.
#    MaxMatech
#
#    Copyright (C) 2024-TODAY Cybrosys Technologies(<https://www.cybrosys.com>)
#    Author: Gayathri V (Contact : odoo@cybrosys.com)
#    Copyright (C) 2024-TODAY MaxMatech
#    Author: Mahmoud Osama
#
#    You can modify it under the terms of the GNU AFFERO
#    GENERAL PUBLIC LICENSE (AGPL v3), Version 3.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU AFFERO GENERAL PUBLIC LICENSE (AGPL v3) for more details.
#
#    You should have received a copy of the GNU AFFERO GENERAL PUBLIC LICENSE
#    (AGPL v3) along with this program.
#    If not, see <http://www.gnu.org/licenses/>.
#
#############################################################################
{
    'name': "POS Product Multiple UOM",
    'version': "18.0.1.0.0",
    'category': 'Point of Sale',
    'summary': """A module to manage multiple UoM in POS""",
    'description': """Using this app, you can change unit of measure of
    product in POS order.""",
    'author': 'Mahmoud Osama',
    'company': 'MaxMatech',
    'maintainer': 'Mahmoud Osama',
    'website': "https://www.maxmatech.com",
    'depends': ['point_of_sale', 'uom'],
    'data':
        [   'data/uom_data.xml',
            'views/res_config_settings_views.xml',
            'views/product_template_views.xml',
            'views/pos_order_views.xml',
        ],
    'assets': {
        'point_of_sale._assets_pos': [
            'product_multi_uom_pos/static/src/**/*',
        ],
    },
    'images': [
        'static/description/banner.jpg',
    ],
    'license': 'AGPL-3',
    'installable': True,
    'auto_install': False,
    'application': False,
}
