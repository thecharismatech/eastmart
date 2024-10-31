odoo.define('pos_payment_transaction.models', function(require) {
    'use strict';

    const { Order } = require('point_of_sale.models');
    const Registries = require('point_of_sale.Registries');

    const PosPaymentTransactionOrder = (Order) => class PosPaymentTransactionOrder extends Order {
        //@override
        export_for_printing() {
            const result = super.export_for_printing();
            const paymentlines = this.get_paymentlines();
            result.paymentlines = paymentlines.map(payment => ({
                ...payment.export_for_printing(),
                transaction_number: payment.transaction_number || '',
            }));
            return result;
        }
    };

    Registries.Model.extend(Order, PosPaymentTransactionOrder);
});
