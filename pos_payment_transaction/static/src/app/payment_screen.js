import { PaymentScreen } from "@point_of_sale/app/screens/payment_screen/payment_screen";
import { patch } from "@web/core/utils/patch";

patch(PaymentScreen.prototype, {
    setup() {
        super.setup();
        this.popup = this.env.services.popup;
    },

    async validateOrder(force_validation) {
        const order = this.currentOrder;
        const paymentLines = order.get_paymentlines();
        
        for (const line of paymentLines) {
            if (line.payment_method.type === 'bank') {
                const result = await this._validateTransactionNumber(line);
                if (!result) return false;
            }
        }
        return super.validateOrder(force_validation);
    },

    async _validateTransactionNumber(paymentLine) {
        const { confirmed, payload } = await this.popup.add({
            title: 'Bank Transaction',
            body: 'Enter 6-digit transaction number to proceed',
            inputType: 'text',
            maxLength: 6,
            confirmText: 'Validate',
            cancelText: 'Cancel',
            pattern: '[0-9]*'
        });

        if (!confirmed) return false;
        if (!payload || !payload.match(/^\d{6}$/)) {
            await this.popup.add({
                title: 'Invalid Input',
                body: 'Please enter exactly 6 digits',
                type: 'error'
            });
            return false;
        }

        paymentLine.transaction_number = payload;
        return true;
    }
});