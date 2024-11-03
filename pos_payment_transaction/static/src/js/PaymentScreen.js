//** @odoo-module **/('pos_payment_transaction.PaymentScreen', function(require) {
    'use strict';

    const PaymentScreen = import 'point_of_sale.PaymentScreen');
    const Registries = import 'point_of_sale/Registries');

    const PosPaymentTransactionPaymentScreen = PaymentScreen => class extends PaymentScreen {
        async validatePaymentTransaction(paymentLine) {
            const { confirmed, payload } = await this.showPopup('TextInputPopup', {
                title: 'Enter Transaction Number',
                body: 'Please enter the transaction number for this payment.',
            });
            if (confirmed) {
                paymentLine.transaction_number = payload;
            }
            return super.validatePaymentTransaction(paymentLine);
        }
    };

    Registries.Component.extend(PaymentScreen, PosPaymentTransactionPaymentScreen);

    return PaymentScreen;
});
