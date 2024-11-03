import { PaymentScreen } from "@point_of_sale/app/screens/payment_screen/payment_screen";
import { patch } from "@web/core/utils/patch";

patch(PaymentScreen.prototype, {
    setup() {
        super.setup();
        this.popup = this.env.services.popup;
    },
    
    async validatePayment(paymentLine) {
        const transactionNumber = paymentLine.transaction_number;
        if (!transactionNumber || !transactionNumber.match(/^\d{6}$/)) {
            this.popup.add({
                title: 'Transaction Required',
                body: 'Enter exactly 6 digits',
                type: 'error'
            });
            return false;
        }
        return super.validatePayment(paymentLine);
    }
});