import { Component } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";

export class PaymentTransactionScreen extends Component {
    static template = "pos_payment_transaction.PaymentScreen";
    
    setup() {
        this.popup = useService("popup");
        this.pos = useService("pos");
    }

    validateTransaction(transactionNumber) {
        if (!transactionNumber.match(/^\d{6}$/)) {
            this.popup.add({
                title: 'Transaction Validation',
                body: 'Enter 6-digit transaction number',
                type: 'error'
            });
            return false;
        }
        return true;
    }

    async processPayment(payment) {
        if (this.validateTransaction(payment.transactionNumber)) {
            await this.pos.createPayment({
                ...payment,
                transactionValidated: true
            });
        }
    }
}
