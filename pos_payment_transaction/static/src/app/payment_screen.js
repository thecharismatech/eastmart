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
                const { confirmed, payload } = await this.popup.add({
                    title: 'Transaction Number Required',
                    body: 'Enter 6-digit transaction number',
                    inputType: 'text',
                    maxLength: 6,
                    confirmText: 'Confirm',
                    cancelText: 'Cancel'
                });
                
                if (!confirmed || !payload || !payload.match(/^\d{6}$/)) {
                    return false;
                }
                line.transaction_number = payload;
            }
        }
        
        return super.validateOrder(force_validation);
    }
});