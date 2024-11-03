import { PaymentScreen } from "@point_of_sale/app/screens/payment_screen/payment_screen";
import { patch } from "@web/core/utils/patch";

patch(PaymentScreen.prototype, {
    setup() {
        super.setup();
        this.popup = this.env.services.popup;
    },

    async validatePayment(paymentLine) {
        if (paymentLine.payment_method.type === 'bank') {
            const { confirmed, payload: transactionNumber } = await this.popup.add({
                title: 'Enter Transaction Number',
                body: 'Please enter 6-digit transaction number',
                inputType: 'text',
                maxLength: 6,
                confirmText: 'Validate',
                cancelText: 'Cancel'
            });

            if (!confirmed || !transactionNumber.match(/^\d{6}$/)) {
                return false;
            }
            paymentLine.transaction_number = transactionNumber;
        }
        return super.validatePayment(paymentLine);
    }
});