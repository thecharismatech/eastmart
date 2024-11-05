odoo.define('pos_transaction_validate.payment_screen', function(require) {
    'use strict';

    const PaymentScreen = require('point_of_sale.PaymentScreen');
    const Registries = require('point_of_sale.Registries');
    const { _t } = require('web.core');

    const PosTransactionPaymentScreen = PaymentScreen => class extends PaymentScreen {
        async validateOrder(isForceValidate) {
            try {
                const selectedPaymentLine = this.currentOrder.selected_paymentline;
                
                if (selectedPaymentLine && selectedPaymentLine.payment_method.use_payment_terminal) {
                    if (!this.env.pos.config.require_transaction_id) {
                        return super.validateOrder(isForceValidate);
                    }

                    const transactionId = await this.showPopup('TextInputPopup', {
                        title: _t('Transaction ID Required'),
                        body: _t('Please enter the 6-digit transaction ID:'),
                        startingValue: selectedPaymentLine.transaction_id || '',
                    });

                    if (transactionId.confirmed) {
                        const input = transactionId.payload;
                        if (!/^\d{6}$/.test(input)) {
                            await this.showPopup('ErrorPopup', {
                                title: _t('Invalid Transaction ID'),
                                body: _t('Transaction ID must be exactly 6 digits.'),
                            });
                            return;
                        }
                        selectedPaymentLine.set_transaction_id(input);
                        selectedPaymentLine.transaction_id = input;
                    } else {
                        return;
                    }
                }
                
                return super.validateOrder(isForceValidate);
            } catch (error) {
                await this.showPopup('ErrorPopup', {
                    title: _t('Validation Error'),
                    body: _t('An error occurred while validating the payment: ') + error.message,
                });
                return false;
            }
        }

        _updateSelectedPaymentline() {
            try {
                super._updateSelectedPaymentline();
                const line = this.currentOrder.selected_paymentline;
                if (line && line.payment_method.use_payment_terminal) {
                    this.trigger('validate-payment');
                }
            } catch (error) {
                console.error('Payment line update error:', error);
            }
        }
    };

    Registries.Component.extend(PaymentScreen, PosTransactionPaymentScreen);

    return PosTransactionPaymentScreen;
});
